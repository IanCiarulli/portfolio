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
        <div className="from-spring-wood/88 via-spring-wood/92 to-spring-wood/85 border-spring-wood/45 mx-auto max-w-xs rounded-xl border bg-gradient-to-br p-4 shadow-[0_3px_10px_-2px_rgba(0,0,0,0.08),0_6px_18px_-4px_rgba(0,0,0,0.05)]">
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
                      className="via-spring-wood/6 to-spring-wood/10 border-spring-wood/28 hover:via-spring-wood/10 hover:to-spring-wood/15 hover:border-spring-wood/38 flex flex-col items-center gap-1 rounded-lg border bg-gradient-to-br from-white/85 px-2 py-2 shadow-[0_2px_6px_-1px_rgba(0,0,0,0.07)] transition-all duration-220 hover:from-white/92 hover:shadow-[0_3px_10px_-1px_rgba(0,0,0,0.11)]"
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

      <div className="hidden w-full flex-col items-center lg:flex">
        <div className="grid w-full max-w-7xl grid-cols-3 gap-12">
          {data.map((category) => (
            <div key={category.title} className="flex flex-col items-center">
              <div className="from-spring-wood/100 via-spring-wood/90 to-spring-wood/95 border-spring-wood/40 mb-6 rounded-lg border bg-gradient-to-br px-6 py-3 shadow-[0_2px_6px_-1px_rgba(0,0,0,0.1)]">
                <h3 className="text-morocco-brown text-center text-lg font-bold">
                  {category.title}
                </h3>
              </div>
              <div className="flex w-full flex-col gap-4">
                {category.data.map(
                  ({ thumbnailPath, thumbnailAltText, tooltip }) => (
                    <TechTooltip
                      key={thumbnailAltText}
                      tooltip={tooltip}
                      className="border-spring-wood/40 from-spring-wood/80 via-spring-wood/90 to-spring-wood/95 hover:border-spring-wood/60 rounded-lg bg-gradient-to-br shadow-[0_2px_8px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.15)]"
                    >
                      <div className="to-spring-wood/30 border-element/25 hover:via-spring-wood/20 hover:to-element/10 hover:border-element/40 flex w-full items-center gap-2.5 overflow-hidden rounded-md border bg-gradient-to-r from-white/95 via-white px-3 py-2.5 pr-2 shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-[1.02] hover:from-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="from-element/6 h-full w-full bg-gradient-to-r to-transparent"></div>
                        </div>
                        <div className="h-4 w-4 flex-shrink-0">
                          <Thumbnail
                            thumbnailPath={thumbnailPath}
                            thumbnailAltText={thumbnailAltText}
                          />
                        </div>
                        <span className="text-morocco-brown flex-1 overflow-hidden text-sm font-medium text-ellipsis whitespace-nowrap">
                          {thumbnailAltText}
                        </span>
                      </div>
                    </TechTooltip>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
