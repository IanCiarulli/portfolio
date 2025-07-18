import { type FC } from 'react';
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
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-cta border-cta-hover relative mx-4 max-h-[80vh] w-full max-w-md overflow-y-auto rounded-xl border p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-center">
          <h2 className="text-cta-text text-lg font-bold">package.json</h2>
        </div>

        <div className="bg-morocco-brown rounded-lg p-4 font-mono text-sm">
          <div className="text-sazerac">
            <div className="mb-2">
              <span className="text-highlight-rn">"name"</span>
              <span className="text-sazerac">: </span>
              <span className="text-spring-wood">
                "{projectTitle.toLowerCase().replace(/\s+/g, '-')}"
              </span>
              <span className="text-sazerac">,</span>
            </div>
            <div className="mb-2">
              <span className="text-highlight-rn">"version"</span>
              <span className="text-sazerac">: </span>
              <span className="text-spring-wood">"1.0.0"</span>
              <span className="text-sazerac">,</span>
            </div>
            <div className="mb-2">
              <span className="text-highlight-rn">"dependencies"</span>
              <span className="text-sazerac">: {'{'}</span>
            </div>
            <div className="ml-4">
              {techs.map((techKey, index) => {
                const tech = TECHS[techKey];
                const techVersion = techVersions.find(
                  (tv) =>
                    tv.name.toLowerCase().replace(/\s+/g, '-') ===
                    tech.thumbnailAltText.toLowerCase().replace(/\s+/g, '-')
                );
                return (
                  <div key={techKey} className="mb-1">
                    <span className="text-highlight-rn">
                      "
                      {tech.thumbnailAltText.toLowerCase().replace(/\s+/g, '-')}
                      "
                    </span>
                    <span className="text-sazerac">: </span>
                    <span className="text-spring-wood">
                      "{techVersion?.version || '1.0.0'}"
                    </span>
                    {index < techs.length - 1 && (
                      <span className="text-sazerac">,</span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="text-sazerac">{'}'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
