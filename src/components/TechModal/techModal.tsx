import { type FC, useEffect } from 'react';
import { TECHS } from '../../constants';
import { type TechVersion } from '../../data/techVersions';

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  techs: (keyof typeof TECHS)[];
  techVersions: TechVersion[];
}

export const TechModal: FC<TechModalProps> = ({
  isOpen,
  onClose,
  projectTitle,
  techs,
  techVersions,
}) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md"
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
                  "version"
                </span>
                <span className="text-sazerac/70">: </span>
                <span className="text-spring-wood font-medium">"1.0.0"</span>
                <span className="text-sazerac/70">,</span>
              </div>

              <div className="text-sazerac/90 mb-3">
                <span className="text-highlight-rn font-semibold">
                  "dependencies"
                </span>
                <span className="text-sazerac/70">: {'{'}</span>
              </div>

              <div className="ml-6 space-y-2">
                {techs.map((techKey, index) => {
                  const tech = TECHS[techKey];
                  const techVersion = techVersions.find(
                    (tv) =>
                      tv.name.toLowerCase().replace(/\s+/g, '-') ===
                      tech.thumbnailAltText.toLowerCase().replace(/\s+/g, '-')
                  );
                  return (
                    <div key={techKey} className="flex items-center gap-2">
                      <div className="bg-highlight-rn/20 h-1 w-1 rounded-full"></div>
                      <span className="text-highlight-rn font-medium">
                        "
                        {tech.thumbnailAltText
                          .toLowerCase()
                          .replace(/\s+/g, '-')}
                        "
                      </span>
                      <span className="text-sazerac/70">: </span>
                      <span className="text-spring-wood font-medium">
                        "{techVersion?.version || '1.0.0'}"
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
