import { type FC, useRef, useState, useEffect } from 'react';
import { type ProjectProps } from '../../models';
import { ProjectCard } from '../ProjectCard/projectCard';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectsListProps {
  items: ProjectProps[];
  title: string;
}

export const ProjectsList: FC<ProjectsListProps> = ({ items, title }) => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const visibleProjects = showAll ? items : items.slice(0, 3);

  useEffect(() => {
    if (!showAll) {
      sectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [showAll]);

  return (
    <section
      ref={sectionRef}
      className="flex w-full flex-col items-center justify-center pt-16"
      id="projects"
    >
      <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>

      <motion.div className="hidden grid-cols-3 gap-6 lg:grid" layout>
        <AnimatePresence>
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div
        className="w-full overflow-x-auto px-6 lg:hidden"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
        }}
      >
        <div className="flex gap-4">
          <div
            className="flex-shrink-0"
            style={{ width: 'calc((100vw - 260px) / 2)' }}
          />
          {items.map((project, i) => (
            <motion.div
              key={project.title}
              className="flex-shrink-0 snap-center"
              style={{ width: '260px' }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}

          <div
            className="flex-shrink-0"
            style={{ width: 'calc((100vw - 260px) / 2)' }}
          />
        </div>
      </div>

      <button
        className="text-morocco-brown mt-6 hidden transform text-base font-semibold transition-transform duration-200 hover:scale-105 lg:block"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};
