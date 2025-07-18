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
    <div className="bg-cta border-cta-hover hover:bg-cta-hover w-[280px] flex-shrink-0 rounded-xl border p-5 shadow-md transition-all hover:shadow-lg sm:w-full">
      <div className="mb-5 flex w-full justify-center">
        <div className="bg-sazerac h-28 w-28 overflow-hidden rounded-lg p-3 shadow-sm">
          <Thumbnail
            thumbnailPath={thumbnailPath}
            thumbnailAltText={thumbnailAltText}
            className="rounded-md"
          />
        </div>
      </div>
      <h3 className="text-cta-text mb-2 truncate text-lg font-bold">{title}</h3>
      <p className="text-cta-text mb-4 text-base font-medium">{role}</p>
      <div className="flex flex-wrap items-center gap-2">
        {techs.map((techKey) => {
          const tech = TECHS[techKey];
          return (
            <div
              key={tech.thumbnailAltText}
              className="bg-sazerac h-6 w-6 rounded-sm p-1 shadow-sm"
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
