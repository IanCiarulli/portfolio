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
  return (
    <div className="flex w-full flex-col items-center pt-16">
      <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>

      {/* Mobile View */}
      <div className="w-full px-4 lg:hidden">
        <div className="bg-spring-wood border-element/20 mx-auto max-w-xs rounded-xl border p-3 shadow-lg">
          <div className="flex flex-col items-center gap-4">
            {data.map((category) => (
              <div key={category.title} className="flex flex-col items-center">
                <h3 className="text-morocco-brown mb-1 text-sm font-semibold">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {category.data.map(({ thumbnailPath, thumbnailAltText }) => (
                    <div
                      key={thumbnailAltText}
                      className="bg-sazerac border-element/30 flex flex-col items-center gap-1 rounded-lg border p-2"
                      title={thumbnailAltText}
                    >
                      <div className="h-10 w-10">
                        <Thumbnail
                          thumbnailPath={thumbnailPath}
                          thumbnailAltText={thumbnailAltText}
                        />
                      </div>
                      <span className="text-text-secondary text-center text-xs">
                        {thumbnailAltText}
                      </span>
                    </div>
                  ))}
                </div>
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
