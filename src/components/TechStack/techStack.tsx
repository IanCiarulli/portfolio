import { TECHNOLOGIES_DATA } from '../../utils';
import { Thumbnail } from '../Thumbnail/thumbnail';

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
          const { iconPath, iconAltText, iconLink, shadowColor } = data;

          return (
            <Thumbnail
              key={`${index} + ${key}`}
              iconPath={iconPath}
              iconAltText={iconAltText}
              iconLink={iconLink}
              shadowColor={shadowColor}
              className={key}
            />
          );
        })}
      </div>
    </div>
  );
}
