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
      <h2 className="mb-4 text-center text-xl font-bold">{title}</h2>
      <div className="flex justify-center space-x-8">
        {Object.entries(data).map(([key, data], index) => {
          const { iconPath, iconAltText, iconLink, shadowColor } = data;

          return (
            <a
              key={`${index} + ${key}`}
              href={iconLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              style={
                { '--hover-shadow-color': shadowColor } as React.CSSProperties
              }
            >
              <img
                src={iconPath}
                aria-label={iconAltText}
                className="block h-16 w-16 bg-transparent object-contain transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_4px_10px_var(--hover-shadow-color)]"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
