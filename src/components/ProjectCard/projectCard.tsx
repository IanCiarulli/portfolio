import { useState } from 'react';
import { Thumbnail, TechModal } from '..';
import { ProjectProps } from '../../models';
import { TECHS } from '../../constants';
import { TECH_VERSIONS } from '../../data/techVersions';

export const ProjectCard = ({
  thumbnailPath,
  thumbnailAltText,
  title,
  role,
  techs = [],
}: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        className="from-cta/95 via-cta to-cta-hover border-cta-hover hover:from-cta-hover/90 hover:via-cta-hover hover:to-cta-hover focus:from-cta-hover/90 focus:via-cta-hover focus:to-cta-hover active:from-cta-hover active:via-cta-hover active:to-cta-hover focus:ring-highlight-rn/50 w-[280px] flex-shrink-0 cursor-pointer rounded-xl border bg-gradient-to-br p-5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.3),0_4px_16px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4),0_8px_24px_-6px_rgba(0,0,0,0.15)] focus:scale-[1.02] focus:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4),0_8px_24px_-6px_rgba(0,0,0,0.15)] focus:ring-2 focus:outline-none active:scale-[1.01] sm:w-full"
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
      >
        <div className="mb-5 flex w-full justify-center">
          <div className="from-sazerac to-sazerac/90 ring-sazerac/20 hover:ring-sazerac/40 focus-within:ring-sazerac/40 relative h-28 w-28 overflow-hidden rounded-lg bg-gradient-to-br p-3 shadow-md ring-2 transition-all duration-300 focus-within:-translate-y-0.5 focus-within:shadow-lg hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md">
            <div className="bg-highlight-rn absolute -top-1 -right-1 h-3 w-3 rounded-full opacity-80 shadow-sm transition-all duration-300 focus-within:scale-110 focus-within:opacity-100 hover:scale-110 hover:opacity-100"></div>
            <Thumbnail
              thumbnailPath={thumbnailPath}
              thumbnailAltText={thumbnailAltText}
              className="rounded-md transition-transform duration-300 hover:scale-105 focus:scale-105"
            />
          </div>
        </div>
        <h3 className="text-cta-text mb-2 truncate text-lg font-bold drop-shadow-sm">
          {title}
        </h3>
        <p className="text-cta-text/90 mb-4 text-base font-medium">{role}</p>
        <div className="flex flex-wrap items-center gap-2">
          {techs.map((techKey) => {
            const tech = TECHS[techKey];
            return (
              <div
                key={tech.thumbnailAltText}
                className="from-sazerac to-sazerac/80 ring-sazerac/20 h-6 w-6 rounded-sm bg-gradient-to-br p-1 shadow-sm ring-1 transition-transform duration-200 hover:scale-110"
                title={tech.thumbnailAltText}
              >
                <Thumbnail
                  thumbnailPath={tech.thumbnailPath}
                  thumbnailAltText={tech.thumbnailAltText}
                />
              </div>
            );
          })}
        </div>
      </div>

      <TechModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        projectTitle={title}
        techs={techs}
        techVersions={TECH_VERSIONS}
      />
    </>
  );
};
