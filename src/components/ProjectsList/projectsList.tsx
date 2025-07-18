import { type FC, useState } from 'react';
import { type ProjectProps } from '../../models';
import { ProjectCard } from '../ProjectCard/projectCard';
import { motion } from 'framer-motion';

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
      <div className="hidden grid-cols-3 gap-6 lg:grid">
        {visibleProjects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
      <div className="w-full overflow-x-auto lg:hidden">
        <motion.div
          className="flex snap-x snap-mandatory gap-4 px-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {items.map((project, i) => (
            <motion.div
              key={i}
              className="w-[85%] snap-start"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <button
        className="text-morocco-brown mt-6 hidden text-sm font-medium hover:underline lg:block"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};
