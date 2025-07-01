import React, { useState } from 'react';
import { Thumbnail } from '../index';

interface GridSectionProps {
  items: Array<{
    id: string;
    iconPath: string;
    iconAltText: string;
    iconLink: string;
    shadowColor: string;
    className: string;
    title: string;
    description?: string;
  }>;
}

const GridSection: React.FC<GridSectionProps> = ({ items }) => {
  const [selected, setSelected] = useState<null | (typeof items)[0]>(null);

  return (
    <section className="flex w-full items-center justify-center pt-16">
      <div className="grid grid-cols-2 justify-items-center gap-x-16 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-24">
        {items.map((item) => (
          <Thumbnail
            key={item.id}
            iconPath={item.iconPath}
            iconAltText={item.iconAltText}
            iconLink={item.iconLink}
            shadowColor={item.shadowColor}
            className={item.className + ' mb-8 h-16 w-16'}
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
              src={selected.iconPath}
              alt={selected.iconAltText}
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
