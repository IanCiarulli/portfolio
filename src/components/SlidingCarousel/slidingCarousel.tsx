import { FC, useEffect } from 'react';
import './slidingCarousel.css';
import { TECHS } from '../../constants';
import { Thumbnail } from '../Thumbnail/thumbnail';

interface SlidingCarouselProps {
  title?: string;
  className?: string;
}

export const SlidingCarousel: FC<SlidingCarouselProps> = ({
  className = '',
}) => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const scrollers = document.querySelectorAll('.scroller');
    scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', 'true');
      const scrollerInner = scroller.querySelector('.scroller__inner');
      if (!scrollerInner) return;
      const scrollerContent = Array.from(scrollerInner.children);
      // Evita duplicar si ya están duplicados
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

  return (
    <section
      className={`mx-auto flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b py-2 md:w-4/5 ${className}`}
    >
      <div className="scroller" data-speed="slow">
        <div className="scroller__inner">
          {Object.entries(TECHS).map(([tech, config]) => (
            <div className="scrollerItem" key={tech}>
              <Thumbnail
                thumbnailPath={config.thumbnailPath}
                thumbnailAltText={config.thumbnailAltText}
                className="h-6 w-6"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
          {Object.entries(TECHS).map(([tech, config]) => (
            <div className="scrollerItem" key={tech}>
              <Thumbnail
                thumbnailPath={config.thumbnailPath}
                thumbnailAltText={config.thumbnailAltText}
                className="h-6 w-6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
