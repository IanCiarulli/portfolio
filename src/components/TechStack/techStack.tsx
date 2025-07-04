import { TECHNOLOGIES_DATA } from '../../utils';
import { Thumbnail } from '../index';

export function TechStack({
  title,
  data,
}: {
  data: typeof TECHNOLOGIES_DATA;
  title: string;
}) {
  return (
    <div className="flex w-full flex-col items-center pt-16">
      <h2 className="mb-6 text-center text-2xl font-bold">{title}</h2>
      <div className="flex justify-center space-x-10">
        {Object.entries(data).map(([key, data], index) => {
          const {
            thumbnailPath,
            thumbnailAltText,
            thumbnailLink,
            shadowColor,
          } = data;
          console.log('ClassName key', key);
          return (
            <Thumbnail
              key={`${index} + ${key}`}
              thumbnailPath={thumbnailPath}
              thumbnailAltText={thumbnailAltText}
              thumbnailLink={thumbnailLink}
              shadowColor={shadowColor}
            />
          );
        })}
      </div>
    </div>
  );
}
