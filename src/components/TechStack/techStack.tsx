import { Thumbnail } from '../index';
import type { ThumbnailProps } from '../../models';

interface TechStackCategory {
  title: string;
  data: ThumbnailProps[];
}

export function TechStack({
  title,
  data,
}: {
  data: TechStackCategory[];
  title: string;
}) {
  const coreTech =
    data.find((category) => category.title === 'Core')?.data || [];
  const stateManagementTech =
    data.find((category) => category.title === 'State Management')?.data || [];
  const mobileStackTech = [...coreTech, ...stateManagementTech];

  return (
    <div className="flex w-full flex-col items-center pt-16">
      <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>

      {/* Mobile View */}
      <div className="w-full px-4 lg:hidden">
        <div className="bg-spring-wood border-element/20 mx-auto max-w-sm rounded-xl border p-6 shadow-lg">
          <div className="grid grid-cols-4 gap-4">
            {mobileStackTech.map(({ thumbnailPath, thumbnailAltText }) => (
              <div
                key={thumbnailAltText}
                className="bg-sazerac border-element/30 flex h-16 w-16 items-center justify-center rounded-lg border p-2"
                title={thumbnailAltText}
              >
                <Thumbnail
                  thumbnailPath={thumbnailPath}
                  thumbnailAltText={thumbnailAltText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden w-full flex-col items-center gap-8 lg:flex">
        {data.map((category) => (
          <div key={category.title} className="w-full">
            <h3 className="text-morocco-brown mb-4 text-center text-xl font-semibold">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.data.map(({ thumbnailPath, thumbnailAltText }) => (
                <div
                  key={thumbnailAltText}
                  className="bg-spring-wood border-element/30 flex items-center gap-2 rounded-full border px-4 py-2"
                  title={thumbnailAltText}
                >
                  <div className="h-8 w-8">
                    <Thumbnail
                      thumbnailPath={thumbnailPath}
                      thumbnailAltText={thumbnailAltText}
                    />
                  </div>
                  <span className="text-text-secondary font-medium">
                    {thumbnailAltText}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
