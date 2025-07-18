import { type FC, useState } from 'react';
import { type ProjectProps } from '../../models';
import { ProjectCard } from '../ProjectCard/projectCard';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectsListProps {
  items: ProjectProps[];
  title: string;
}

export const ProjectsList: FC<ProjectsListProps> = ({ items, title }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? items : items.slice(0, 3);

  return (
    <section
      className="flex w-full flex-col items-center justify-center pt-16"
      id="projects"
    >
      <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>

      {/* Desktop Grid */}
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

      {/* Mobile Carousel */}
      <div
        className="w-full overflow-x-auto px-6 lg:hidden"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="flex gap-4">
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
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className="text-morocco-brown mt-6 hidden text-sm font-medium hover:underline lg:block"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};
