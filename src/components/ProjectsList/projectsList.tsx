import { type FC, useRef, useState, useEffect } from 'react';
import { type ProjectProps } from '../../models';
import { ProjectCard } from '../ProjectCard/projectCard';
import { motion } from 'framer-motion';
import { useDelayedSnap } from '../../hooks/';

interface ProjectsListProps {
  items: ProjectProps[];
  title: string;
}

export const ProjectsList: FC<ProjectsListProps> = ({ items, title }) => {
  const [showAll, setShowAll] = useState(false);
  const [isInitialMount, setIsInitialMount] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const snapEnabled = useDelayedSnap(300);

  const visibleProjects = showAll ? items : items.slice(0, 3);

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

  return (
    <section
      ref={sectionRef}
      className="font-jetbrains flex w-full flex-col items-center justify-center pt-16"
      id="projects"
    >
      <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>

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
          {items.map((project, i) => (
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
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};
