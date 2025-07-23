import { type FC, useRef, useState, useEffect, useMemo } from 'react';
import { type ProjectProps } from '../../models';
import { ProjectCard, TechIcon } from '..';
import { motion } from 'framer-motion';
import { useDelayedSnap } from '../../hooks/';
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

interface ProjectsListProps {
  items: ProjectProps[];
  title: string;
}

export const ProjectsList: FC<ProjectsListProps> = ({ items, title }) => {
  const [showAll, setShowAll] = useState(false);
  const [isInitialMount, setIsInitialMount] = useState(true);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
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
    <section
      ref={sectionRef}
      className="font-jetbrains flex w-full flex-col items-center justify-center pt-32"
      id="projects"
    >
      <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>

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
              <ProjectCard {...project} />
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
              <ProjectCard {...project} />
            </motion.div>
          ))}
          <div
            className="flex-shrink-0"
            style={{ width: 'calc((100vw - 280px) / 2)' }}
          />
        </div>
      </div>

      <button
        className="text-morocco-brown mt-6 hidden transform text-base font-semibold transition-transform duration-200 hover:scale-105 lg:block"
        onClick={handleToggleShowAll}
        style={{ display: filteredProjects.length <= 3 ? 'none' : 'block' }}
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};
