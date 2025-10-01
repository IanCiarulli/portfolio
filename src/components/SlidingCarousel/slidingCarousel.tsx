import { FC, useEffect } from 'react';
import './slidingCarousel.css';
import { TECHS } from '../../constants';
import { Thumbnail } from '../Thumbnail/thumbnail';
import { TechTooltip } from '../TechTooltip/techTooltip';

type TechKey = keyof typeof TECHS;
type TechConfig = (typeof TECHS)[TechKey];

export const SlidingCarousel: FC = () => {
  function splitTechs(techs: typeof TECHS) {
    const featuredKeys = ['TYPESCRIPT', 'REACT_NATIVE', 'COPILOT'] as const;
    const featured = featuredKeys.map(
      (key) => [key, techs[key]] as [TechKey, TechConfig]
    );
    const slider = (Object.entries(techs) as [TechKey, TechConfig][]).filter(
      ([key]) => !(featuredKeys as readonly string[]).includes(key)
    );
    return { featured, slider };
  }
  const { featured, slider } = splitTechs(TECHS);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const scrollers = document.querySelectorAll('.scroller');
    scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', 'true');
      const scrollerInner = scroller.querySelector('.scroller__inner');
      if (!scrollerInner) return;
      const scrollerContent = Array.from(scrollerInner.children);
      if (
        [...scrollerInner.children].some(
          (el) => el.getAttribute('aria-hidden') === 'true'
        )
      )
        return;
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute('aria-hidden', 'true');
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }, []);

  const carouselItem = (tech: TechKey, config: TechConfig) => {
    return (
      <div className="scrollerItem" key={tech}>
        <TechTooltip tooltip={config.thumbnailAltText}>
          <Thumbnail
            thumbnailPath={config.thumbnailPath}
            thumbnailAltText={config.thumbnailAltText}
            transform={[48, 48]}
          />
        </TechTooltip>
      </div>
    );
  };

  return (
    <div className="pt-6">
      <div className="text-cta/80 text-md w-full pb-2 text-center italic">
        <p>Core</p>
      </div>
      <div className="mb-4 flex justify-center gap-4">
        {featured.map(([tech, config]) =>
          carouselItem((tech + '_featured') as TechKey, config)
        )}
      </div>
      <div className="text-cta/80 w-full pt-2 text-center text-sm italic">
        <p>Techs that I have worked with</p>
      </div>
      <div className="scroller" data-speed="slow">
        <div className="scroller__inner">
          {slider.map(([tech, config]) =>
            carouselItem((tech + '_row1') as TechKey, config)
          )}
        </div>
      </div>
      <div className="scroller" data-direction="right" data-speed="fast">
        <div className="scroller__inner">
          {slider.map(([tech, config]) =>
            carouselItem((tech + '_row2') as TechKey, config)
          )}
        </div>
      </div>
    </div>
  );
};
