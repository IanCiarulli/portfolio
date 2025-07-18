import { Thumbnail } from '..';
import { ProjectProps } from '../../models';
import { TECHS } from '../../constants';

export const ProjectCard = ({
  thumbnailPath,
  thumbnailAltText,
  title,
  role,
  techs = [],
}: ProjectProps) => {
  return (
    <div className="bg-spring-wood border-element flex w-full max-w-xs flex-shrink-0 flex-col items-start rounded-xl border p-4 shadow-sm transition-all hover:scale-[1.01] hover:shadow-md sm:max-w-full">
      <div className="mb-4 flex w-full justify-center">
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
    </div>
  );
};
