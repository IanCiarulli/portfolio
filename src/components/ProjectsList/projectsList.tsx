import { type FC, useState } from 'react';
import { Thumbnail } from '../index';
import type { ProjectProps } from '../../models';

interface ProjectsListProps {
  items: ProjectProps[];
  title: string;
}

export const ProjectsList: FC<ProjectsListProps> = ({ items, title }) => {
  const [selected, setSelected] = useState<null | ProjectProps>(null);

  return (
    <section className="flex w-full flex-col items-center justify-center pt-16">
      <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-2 justify-items-center gap-x-16 gap-y-8 rounded-lg sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-24">
        {items.map((item) => (
          <button
            onClick={() => setSelected(item)}
            key={item.title}
            className="overflow-hidden rounded-[8px]"
          >
            <Thumbnail
              thumbnailPath={item.thumbnailPath}
              thumbnailAltText={item.thumbnailAltText}
            />
          </button>
        ))}
      </div>
      {selected && (
        <div
          className="sm: fixed inset-0 z-50 flex items-center justify-center px-6 lg:px-0"
          style={{ background: 'rgba(0,0,0,0.2)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-md rounded bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.thumbnailPath}
              alt={selected.thumbnailAltText}
              className="mb-4 h-48 w-full rounded object-cover"
            />
            <h2 className="mb-2 text-xl font-bold">{selected.title}</h2>
            {selected.description && <p>{selected.description}</p>}
          </div>
        </div>
      )}
    </section>
  );
};
