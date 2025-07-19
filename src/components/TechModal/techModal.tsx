import { type FC, useEffect, useState } from 'react';
import { TECHS } from '../../constants';
import { type TechWithVersion } from '../../models';

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  techs: TechWithVersion[];
  selectedTech?: string | null;
}

export const TechModal: FC<TechModalProps> = ({
  isOpen,
  onClose,
  projectTitle,
  techs,
  selectedTech,
}) => {
  const [highlightedTech, setHighlightedTech] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && selectedTech) {
      setHighlightedTech(selectedTech);
      const timer = setTimeout(() => {
        setHighlightedTech(null);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setHighlightedTech(null);
    }
  }, [isOpen, selectedTech]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      if (isOpen) {
        const scrollY = document.body.style.top;
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 italic backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="from-cta/90 via-cta to-cta-hover border-cta-hover relative mx-4 max-h-[85vh] w-full max-w-lg overflow-hidden rounded-2xl border bg-gradient-to-br shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-cta-hover bg-cta-hover/30 border-b px-6 py-4">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-highlight-rn h-2 w-2 animate-pulse rounded-full"></div>
            <h2 className="text-sazerac font-mono text-xl font-bold tracking-wide">
              package.json
            </h2>
            <div className="bg-highlight-rn h-2 w-2 animate-pulse rounded-full"></div>
          </div>
        </div>

        <div className="overflow-y-auto p-6">
          <div className="bg-morocco-brown border-morocco-brown/20 rounded-xl border p-6 shadow-inner">
            <div className="font-mono text-sm leading-relaxed">
              <div className="text-sazerac/90 mb-3">
                <span className="text-highlight-rn font-semibold">"name"</span>
                <span className="text-sazerac/70">: </span>
                <span className="text-spring-wood font-medium">
                  "{projectTitle.toLowerCase().replace(/\s+/g, '-')}"
                </span>
                <span className="text-sazerac/70">,</span>
              </div>

              <div className="text-sazerac/90 mb-3">
                <span className="text-highlight-rn font-semibold">
                  "dependencies"
                </span>
                <span className="text-sazerac/70">: {'{'}</span>
              </div>

              <div className="ml-4 space-y-2">
                {techs.map((techWithVersion, index) => {
                  const tech = TECHS[techWithVersion.tech];
                  const isHighlighted =
                    highlightedTech === techWithVersion.tech;

                  return (
                    <div
                      key={techWithVersion.tech}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-300 ${
                        isHighlighted
                          ? 'from-highlight-rn/30 to-highlight-rn/20 ring-highlight-rn/40 animate-pulse bg-gradient-to-r shadow-md ring-2'
                          : 'hover:bg-morocco-brown/20'
                      }`}
                    >
                      <div
                        className={`h-1 w-1 flex-shrink-0 rounded-full transition-all duration-300 ${
                          isHighlighted
                            ? 'bg-highlight-rn shadow-highlight-rn/50 shadow-sm'
                            : 'bg-highlight-rn/50 sm:bg-highlight-rn/20'
                        }`}
                      ></div>
                      <span
                        className={`font-medium transition-all duration-300 ${
                          isHighlighted
                            ? 'text-highlight-rn font-semibold'
                            : 'text-highlight-rn'
                        }`}
                      >
                        "
                        {tech.thumbnailAltText
                          .toLowerCase()
                          .replace(/\s+/g, '-')}
                        "
                      </span>
                      <span className="text-sazerac/70">: </span>
                      <span
                        className={`font-medium transition-all duration-300 ${
                          isHighlighted
                            ? 'text-spring-wood font-semibold'
                            : 'text-spring-wood'
                        }`}
                      >
                        "{techWithVersion.version}"
                      </span>
                      {index < techs.length - 1 && (
                        <span className="text-sazerac/70">,</span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="text-sazerac/70 mt-3">{'}'}</div>
            </div>

            <span className="text-sm text-gray-400/60">
              _Some of the versions might be unknown_
            </span>
          </div>

          <div className="mt-4 text-center">
            <p className="text-cta-text/60 text-xs">
              Press{' '}
              <kbd className="bg-cta-hover/50 text-cta-text rounded px-1 py-0.5 font-mono text-xs">
                ESC
              </kbd>{' '}
              or click outside to close
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
