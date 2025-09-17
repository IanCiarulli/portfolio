import { FC, useEffect } from 'react';
import './slidingCarousel.css';
import { TECHS } from '../../constants';
import { Thumbnail } from '../Thumbnail/thumbnail';
import { TechTooltip } from '../TechTooltip/techTooltip';

export const SlidingCarousel: FC = () => {
  const techEntries = Object.entries(TECHS);

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

  return (
    <div className="mb-6">
      <div className="scroller" data-speed="slow">
        <div className="scroller__inner">
          {techEntries.map(([tech, config]) => (
            <div className="scrollerItem" key={tech}>
              <TechTooltip tooltip={config.thumbnailAltText}>
                <Thumbnail
                  thumbnailPath={config.thumbnailPath}
                  thumbnailAltText={config.thumbnailAltText}
                  transform={[48, 48]}
                />
              </TechTooltip>
            </div>
          ))}
        </div>
      </div>
      <div className="scroller" data-direction="right" data-speed="fast">
        <div className="scroller__inner">
          {techEntries.map(([tech, config]) => (
            <div className="scrollerItem" key={tech}>
              <TechTooltip tooltip={config.thumbnailAltText}>
                <Thumbnail
                  thumbnailPath={config.thumbnailPath}
                  thumbnailAltText={config.thumbnailAltText}
                  transform={[48, 48]}
                />
              </TechTooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
