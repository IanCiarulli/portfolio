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
      <h2 className="mb-6 text-center text-2xl font-bold">{title}</h2>
      <div className="flex justify-center space-x-8">
        {data.map(({ thumbnailPath, thumbnailAltText }) => (
          <div className="h-16 w-16 lg:h-20 lg:w-20" key={thumbnailAltText}>
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
