import { TECHNOLOGIES_DATA } from '../../utils';

export function TechStack({
  title,
  data,
}: {
  data: typeof TECHNOLOGIES_DATA;
  title: string;
}) {
  return (
    <div className="flex w-full flex-col items-center pt-8">
      <h2 className="mb-6 text-center text-xl font-bold">{title}</h2>
      <div className="flex justify-center space-x-10">
        {Object.entries(data).map(([key, data], index) => {
          const { iconPath, iconAltText, iconLink, shadowColor } = data;

          return (
            <a
              key={`${index} + ${key}`}
              href={iconLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src={iconPath}
                aria-label={iconAltText}
                className={`logo ${key}`}
                style={
                  { '--hover-shadow-color': shadowColor } as React.CSSProperties
                }
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
