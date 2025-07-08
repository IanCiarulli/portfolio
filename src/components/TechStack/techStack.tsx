import { Thumbnail } from '../index';
import type { ThumbnailProps } from '../../models';

export function TechStack({
  title,
  data,
}: {
  data: ThumbnailProps[];
  title: string;
}) {
  return (
    <div className="flex w-full flex-col items-center pt-16">
      <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>
      <div className="flex justify-between gap-2 lg:gap-6">
        {data.map(({ thumbnailPath, thumbnailAltText }) => (
          <div className="h-8 w-8 lg:h-12 lg:w-12" key={thumbnailAltText}>
            <Thumbnail
              thumbnailPath={thumbnailPath}
              thumbnailAltText={thumbnailAltText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
