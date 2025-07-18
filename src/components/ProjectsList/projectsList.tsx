import { type FC } from 'react';
import type { ProjectProps } from '../../models';
import { ProjectCard } from '../ProjectCard/projectCard';

interface ProjectsListProps {
  items: ProjectProps[];
  title: string;
}

export const ProjectsList: FC<ProjectsListProps> = ({ items, title }) => {
  return (
    <section
      className="flex w-full flex-col items-center justify-center pt-16"
      id="projects"
    >
      <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};
