import { FC } from 'react';
import { SlidingCarousel } from '../../components';

export const TechSection: FC = () => {
  return (
    <section
      aria-label="Technologies Section"
      className="font-jetbrains mx-auto flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b pt-32 md:w-4/5"
    >
      <h2 className="text-morocco-brown mb-2 text-center text-3xl font-bold tracking-tight">
        Technologies
      </h2>
      <div className="bg-element h-1 w-16 rounded-full"></div>
      <SlidingCarousel />
    </section>
  );
};
