import { type FC, useState } from 'react';
import { Thumbnail } from '../index';

interface GridSectionProps {
  items: Array<{
    id: string;
    thumbnailPath: string;
    thumbnailAltText: string;
    thumbnailLink: string;
    shadowColor: string;
    className: string;
    title: string;
    description?: string;
  }>;
}

const GridSection: FC<GridSectionProps> = ({ items }) => {
  const [selected, setSelected] = useState<null | (typeof items)[0]>(null);

  return (
    <section className="flex w-full items-center justify-center pt-16">
      <div className="grid grid-cols-2 justify-items-center gap-x-16 gap-y-8 rounded-lg sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-24">
        {items.map((item) => (
          <Thumbnail
            key={item.id}
            thumbnailPath={item.thumbnailPath}
            thumbnailAltText={item.thumbnailAltText}
            thumbnailLink={item.thumbnailLink}
            shadowColor={item.shadowColor}
            className={item.className}
            onClick={() => setSelected(item)}
          />
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

export default GridSection;
