import { type FC, useRef, useState, useEffect, useMemo } from 'react';
import { type ProjectsSection as ProjectSectionProps } from '../../models';
import { ProjectCard, TechIcon } from '..';
import { useResponsiveTechCount } from '../../hooks/useResponsiveTechCount';
import { motion } from 'framer-motion';
import { useDelayedSnap } from '../../hooks';
import { TECHS } from '../../constants';

const FILTERABLE_TECHS = [
  'EXPO',
  'TYPESCRIPT',
  'REDUX',
  'ZUSTAND',
  'MOBX',
  'GRAPHQL',
  'JEST',
  'SENTRY',
];

export const ProjectsSection: FC<ProjectSectionProps> = ({ items }) => {
  const techCount = useResponsiveTechCount();
  const [showAll, setShowAll] = useState(false);
  const [isInitialMount, setIsInitialMount] = useState(true);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const snapEnabled = useDelayedSnap(300);

  const availableTechs = useMemo(() => {
    const techSet = new Set<string>();
    items.forEach((project) => {
      project.techs?.forEach((tech) => {
        if (FILTERABLE_TECHS.includes(tech.tech)) {
          techSet.add(tech.tech);
        }
      });
    });
    return FILTERABLE_TECHS.filter((tech) => techSet.has(tech));
  }, [items]);

  const filteredProjects = useMemo(() => {
    if (!selectedTech) return items;
    return items.filter((project) =>
      project.techs?.some((tech) => tech.tech === selectedTech)
    );
  }, [items, selectedTech]);

  useEffect(() => {
    if (selectedTech && filteredProjects.length > 3) {
      setShowAll(true);
    }
  }, [selectedTech, filteredProjects.length]);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialMount(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3, rootMargin: '-100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleToggleShowAll = () => {
    setShowAll((prev) => {
      const newShowAll = !prev;

      if (prev && !newShowAll) {
        setTimeout(() => {
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }, 100);
      }

      return newShowAll;
    });
  };

  const handleTechFilter = (tech: string) => {
    setSelectedTech(tech === selectedTech ? null : tech);
    setShowAll(false);
  };

  const handleTechIconClick = (
    _e: React.MouseEvent,
    tech: keyof typeof TECHS
  ) => {
    handleTechFilter(tech);
  };

  const clearFilter = () => {
    setSelectedTech(null);
    setShowAll(false);
  };

  return (
    <motion.section
      ref={sectionRef}
      className="font-jetbrains flex w-full flex-col items-center justify-center px-8 pt-32 md:px-12 lg:px-0"
      aria-label="Projects Section"
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 40,
      }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
      }}
    >
      <h2 className="text-morocco-brown mb-2 text-center text-3xl font-bold tracking-tight">
        Projects
      </h2>
      <div className="bg-element mb-6 h-1 w-16 rounded-full"></div>

      <div className="mb-6 hidden w-full max-w-5xl lg:block">
        <div className="mb-3 text-center">
          <span className="text-morocco-brown/80 text-xs tracking-wide uppercase">
            Filter by technology
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {availableTechs.map((tech) => {
            const techConfig = TECHS[tech as keyof typeof TECHS];
            if (!techConfig) return null;

            return (
              <TechIcon
                key={tech}
                tech={tech as keyof typeof TECHS}
                onClick={handleTechIconClick}
                isSelected={selectedTech === tech}
                size="medium"
                showDot={false}
                showTooltip={true}
              />
            );
          })}

          <div
            onClick={clearFilter}
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-gradient-to-br from-red-50 to-red-100 shadow-md ring-2 ring-red-200 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:shadow-lg hover:ring-red-300 ${
              selectedTech ? 'opacity-100' : 'pointer-events-none opacity-30'
            }`}
            title="Clear filter"
          >
            <img
              src="/x_b.svg"
              alt="Clear filter"
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="mt-4 h-6 text-center">
          {selectedTech && (
            <span className="text-morocco-brown/80 text-sm">
              Showing {filteredProjects.length} project
              {filteredProjects.length !== 1 ? 's' : ''} using{' '}
              {TECHS[selectedTech as keyof typeof TECHS]?.thumbnailAltText}
            </span>
          )}
        </div>
      </div>

      <div className="w-full max-w-5xl">
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: isInitialMount ? 1 : 0,
                y: isInitialMount ? 0 : 10,
              }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: isInitialMount ? 0 : 0.3,
                delay: isInitialMount ? 0 : Math.min(i * 0.05, 0.15),
                ease: 'easeOut',
              }}
              className="w-full"
            >
              <ProjectCard {...project} techCount={techCount} />
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="w-full overflow-x-auto px-6 lg:hidden"
        style={{
          scrollSnapType: snapEnabled ? 'x mandatory' : 'none',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
        }}
      >
        <div className="flex gap-4">
          <div
            className="flex-shrink-0"
            style={{ width: 'calc((100vw - 280px) / 2)' }}
          />
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              className="flex-shrink-0 snap-center"
              style={{ width: '280px' }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProjectCard {...project} techCount={techCount} />
            </motion.div>
          ))}
          <div
            className="flex-shrink-0"
            style={{ width: 'calc((100vw - 280px) / 2)' }}
          />
        </div>
      </div>

      <button
        className={`text-morocco-brown mt-6 hidden transform text-base font-semibold transition-transform duration-200 hover:scale-105 lg:block ${selectedTech ? 'lg:hidden' : ''}`}
        onClick={handleToggleShowAll}
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </motion.section>
  );
};
