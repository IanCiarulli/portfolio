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
    <div className="font-jetbrains flex w-full flex-col items-center pt-16">
      <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>

      <div className="w-full px-4 lg:hidden">
        <div className="from-spring-wood/95 via-spring-wood to-spring-wood/90 border-spring-wood/60 mx-auto max-w-xs rounded-xl border bg-gradient-to-br p-4 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.15),0_4px_16px_-4px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col items-center gap-6">
            {data.map((category) => (
              <div
                key={category.title}
                className="flex w-full flex-col items-center"
              >
                <h3 className="text-morocco-brown mb-3 text-sm font-bold tracking-wide">
                  {category.title}
                </h3>
                <div className="grid w-full grid-cols-2 gap-2">
                  {category.data.map(({ thumbnailPath, thumbnailAltText }) => (
                    <div
                      key={thumbnailAltText}
                      className="from-sazerac/10 to-sazerac/5 border-sazerac/20 hover:from-sazerac/15 hover:to-sazerac/8 flex flex-col items-center gap-1 rounded-lg border bg-gradient-to-br px-2 py-2 shadow-sm transition-all duration-200 hover:shadow-md"
                      title={thumbnailAltText}
                    >
                      <div className="flex h-8 w-8 items-center justify-center">
                        <Thumbnail
                          thumbnailPath={thumbnailPath}
                          thumbnailAltText={thumbnailAltText}
                        />
                      </div>
                      <span className="text-morocco-brown text-center text-xs font-medium">
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
            <div className="from-spring-wood/95 via-spring-wood to-spring-wood/90 border-spring-wood/60 rounded-xl border bg-gradient-to-br p-6 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.15),0_4px_16px_-4px_rgba(0,0,0,0.1)] transition-all duration-200 hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2),0_8px_24px_-6px_rgba(0,0,0,0.1)]">
              <h3 className="text-morocco-brown mb-4 text-left text-lg font-bold">
                {category.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                {category.data.map(
                  ({ thumbnailPath, thumbnailAltText, tooltip }) => (
                    <TechTooltip key={thumbnailAltText} tooltip={tooltip}>
                      <div className="from-sazerac/10 to-sazerac/5 border-sazerac/20 hover:from-sazerac/15 hover:to-sazerac/8 hover:border-sazerac/30 group flex items-center gap-2 rounded-lg border bg-gradient-to-br px-3 py-2 shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md">
                        <div className="h-6 w-6 flex-shrink-0">
                          <Thumbnail
                            thumbnailPath={thumbnailPath}
                            thumbnailAltText={thumbnailAltText}
                          />
                        </div>
                        <span className="text-morocco-brown text-sm font-medium">
                          {thumbnailAltText}
                        </span>
                      </div>
                    </TechTooltip>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
