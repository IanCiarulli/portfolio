import { TechTooltip, Thumbnail } from '../index';
import type { ThumbnailProps } from '../../models';

interface TechStackCategory {
  title: string;
  data: (ThumbnailProps & { tooltip: string })[];
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

      <div className="w-full px-4 lg:hidden">
        <div className="mx-auto max-w-xs rounded-xl border border-[#e0d6c7] bg-[#fffaf3] p-3 shadow">
          <div className="flex flex-col items-center gap-6">
            {data.map((category) => (
              <div
                key={category.title}
                className="flex w-full flex-col items-center"
              >
                <h3 className="text-morocco-brown mb-2 text-sm font-semibold tracking-wide">
                  {category.title}
                </h3>
                <div className="grid w-full grid-cols-2 gap-2">
                  {category.data.map(({ thumbnailPath, thumbnailAltText }) => (
                    <div
                      key={thumbnailAltText}
                      className="flex flex-col items-center gap-1 rounded-md border border-[#e0d6c7] bg-[#f7f0e5] px-2 py-2 shadow-sm"
                      title={thumbnailAltText}
                    >
                      <div className="flex h-8 w-8 items-center justify-center">
                        <Thumbnail
                          thumbnailPath={thumbnailPath}
                          thumbnailAltText={thumbnailAltText}
                        />
                      </div>
                      <span className="text-text-secondary text-center text-xs font-medium">
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

      <div className="hidden w-full flex-col items-center gap-6 lg:flex">
        {data.map((category) => (
          <div key={category.title} className="w-full max-w-5xl">
            <h3 className="text-morocco-brown mb-4 text-center text-xl font-semibold">
              {category.title}
            </h3>
            <div className="grid auto-rows-fr grid-cols-2 place-items-center gap-4 sm:grid-cols-3 md:grid-cols-4">
              {category.data.map(
                ({ thumbnailPath, thumbnailAltText, tooltip }) => (
                  <div
                    key={thumbnailAltText}
                    className="group flex w-full max-w-[180px] items-center gap-3 rounded-md border border-[#e0d6c7] bg-[#f7f0e5] px-4 py-3 shadow-sm transition-all duration-150 hover:bg-[#f2e7d8] hover:shadow-md"
                    title={thumbnailAltText}
                  >
                    <TechTooltip tooltip={tooltip}>
                      <div className="h-8 w-8 flex-shrink-0">
                        <Thumbnail
                          thumbnailPath={thumbnailPath}
                          thumbnailAltText={thumbnailAltText}
                        />
                      </div>
                    </TechTooltip>
                    <span className="text-text-secondary text-sm font-medium">
                      {thumbnailAltText}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
