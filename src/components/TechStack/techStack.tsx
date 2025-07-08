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
      <div className="flex justify-center lg:space-x-8">
        {data.map(({ thumbnailPath, thumbnailAltText }) => (
          <div
            className="mr-4 h-8 w-8 lg:mr-8 lg:h-16 lg:w-16"
            key={thumbnailAltText}
          >
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
