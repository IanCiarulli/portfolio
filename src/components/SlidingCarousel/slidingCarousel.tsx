import { TECHS } from '../../constants';
import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Thumbnail } from '../Thumbnail/thumbnail';
import { useEffect, useRef } from 'react';

type TechKey = keyof typeof TECHS;

interface SlidingCarouselProps {
  title?: string;
  className?: string;
}

export const SlidingCarousel: FC<SlidingCarouselProps> = ({
  title = 'What I work with',
  className = '',
}) => {
  const trackRef1 = useRef<HTMLDivElement>(null);
  const trackRef2 = useRef<HTMLDivElement>(null);

  const keys: string[] = Array.isArray(TECHS) ? TECHS : Object.keys(TECHS);

  const techList = keys
    .map((key) => ({
      name: TECHS[key as TechKey]?.thumbnailAltText || key,
      icon: TECHS[key as TechKey]?.thumbnailPath || '',
    }))
    .filter((t) => t.icon);

  // Dividir las tecnologías en dos filas
  const midPoint = Math.ceil(techList.length / 2);
  const firstRow = techList.slice(0, midPoint);
  const secondRow = techList.slice(midPoint);

  useEffect(() => {
    if (trackRef1.current) {
      console.log('Fila 1 width:', trackRef1.current.scrollWidth, 'Elementos:', trackRef1.current.children.length);
      trackRef1.current.style.border = '2px solid red';
    }
    if (trackRef2.current) {
      console.log('Fila 2 width:', trackRef2.current.scrollWidth, 'Elementos:', trackRef2.current.children.length);
      trackRef2.current.style.border = '2px solid blue';
    }
  }, []);

  return (
    <section
      className={`mx-auto w-full overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black py-20 md:w-4/5 ${className}`}
    >
      <div className="container mx-auto px-4">
        {title && (
          <motion.h2
            className="mb-16 text-center text-5xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
        )}

        <div className="tech-carousel">
          {/* Primera fila - izquierda a derecha */}
          <div className="carousel-container">
            <div ref={trackRef1} className="carousel-track carousel-track-left-to-right">
              {firstRow.map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="carousel-item">
                  <Thumbnail
                    thumbnailPath={tech.icon}
                    thumbnailAltText={tech.name}
                    className="thumbnail"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
              {/* Duplicates */}
              {firstRow.map((tech, index) => (
                <div key={`${tech.name}-dup-${index}`} className="carousel-item">
                  <Thumbnail
                    thumbnailPath={tech.icon}
                    thumbnailAltText={tech.name}
                    className="thumbnail"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Segunda fila - derecha a izquierda */}
          <div className="carousel-container">
            <div ref={trackRef2} className="carousel-track-reverse">
              {secondRow.map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="carousel-item">
                  <Thumbnail
                    thumbnailPath={tech.icon}
                    thumbnailAltText={tech.name}
                    className="thumbnail"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
              {/* Duplicates */}
              {secondRow.map((tech, index) => (
                <div key={`${tech.name}-dup-${index}`} className="carousel-item">
                  <Thumbnail
                    thumbnailPath={tech.icon}
                    thumbnailAltText={tech.name}
                    className="thumbnail"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .tech-carousel {
            width: 100%;
            overflow: hidden;
          }

          .carousel-container {
            width: 100%;
            overflow: hidden;
            margin-bottom: 0.5rem;
            mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          }

          .carousel-track, .carousel-track-reverse {
            display: flex;
            width: fit-content;
          }

          .carousel-track {
            animation: scroll 30s linear infinite;
          }

          .carousel-track-left-to-right {
            animation: scroll-left-to-right 30s linear infinite;
          }

          .carousel-track-reverse {
            animation: scroll-reverse 25s linear infinite;
          }

          .carousel-container:hover .carousel-track,
          .carousel-container:hover .carousel-track-left-to-right,
          .carousel-container:hover .carousel-track-reverse {
            animation-play-state: paused;
          }

          .carousel-item {
            display: flex;
            align-items: center;
            width: auto;
            min-width: fit-content;
            padding: 0.75rem 1rem;
            margin: 0 0.5rem;
            border-radius: 0.75rem;
            white-space: nowrap;
            gap: 0.75rem;
            background: rgba(30, 41, 59, 0.25); /* más transparente */
            border: 1px solid rgba(255, 255, 255, 0.1);
            flex-shrink: 0;
            box-shadow: none;
            z-index: 1;
          }

          .carousel-item img, .carousel-item .thumbnail {
            width: 24px !important;
            height: 24px !important;
            object-fit: contain !important;
            flex-shrink: 0 !important;
            background: transparent !important;
          }

          .carousel-item span {
            font-size: 1.25rem;
            font-weight: 500;
            color: #e5e7eb;
            background: transparent;
          }

          @keyframes scroll-left-to-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          @keyframes scroll-reverse {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `,
        }}
      />
    </section>
  );
};
