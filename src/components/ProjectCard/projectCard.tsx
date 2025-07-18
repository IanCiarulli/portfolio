import { TECHS } from '../../constants';
import { Thumbnail } from '..';
import { ProjectProps } from '../../models';

export const ProjectCard = ({
  thumbnailPath,
  thumbnailAltText,
  title,
  role,
  techs = [],
  onClick,
}: ProjectProps) => {
  return (
    <button
      onClick={onClick}
      className="group border-element bg-spring-wood focus:ring-cta w-full max-w-xs cursor-pointer rounded-xl border p-4 text-left shadow-sm transition hover:scale-[1.01] hover:shadow-md focus:ring-2 focus:outline-none"
    >
      <div className="mb-4 flex justify-center">
        <div className="h-20 w-20">
          <Thumbnail
            thumbnailPath={thumbnailPath}
            thumbnailAltText={thumbnailAltText}
          />
        </div>
      </div>

      <h3 className="text-morocco-brown mb-1 text-lg font-bold">{title}</h3>
      <p className="text-text-secondary mb-3 text-sm">{role}</p>

      <div className="flex flex-wrap items-center gap-2">
        {techs.map((techKey) => {
          const tech = TECHS[techKey];
          return (
            <div
              key={tech.thumbnailAltText}
              className="h-5 w-5"
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
    </button>
  );
};
