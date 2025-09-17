import { Thumbnail } from '../';
import { TECHS } from '../../constants';
import { useState } from 'react';

interface TechIconProps {
  tech: keyof typeof TECHS;
  size?: 'small' | 'medium' | 'large';
  onClick?: (e: React.MouseEvent, tech: keyof typeof TECHS) => void;
  isSelected?: boolean;
  showDot?: boolean;
  showTooltip?: boolean;
  className?: string;
  context?: 'techStack' | 'projectCard';
}

export const TechIcon = ({
  tech,
  size = 'small',
  onClick,
  isSelected = false,
  showDot = true,
  showTooltip = false,
  className = '',
}: TechIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const techConfig = TECHS[tech];

  if (!techConfig) return null;

  const sizeClasses = {
    small: 'h-8 w-8 p-1.5',
    medium: 'h-10 w-10 p-2',
    large: 'h-12 w-12 p-2.5',
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e, tech);
    }
  };

  return (
    <div className="relative">
      <div
        className={`group relative cursor-pointer rounded-lg bg-gradient-to-br shadow-md ring-2 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:shadow-lg ${sizeClasses[size]} ${
          isSelected
            ? 'from-spring-wood/90 to-spring-wood ring-highlight-rn/60'
            : 'from-spring-wood/90 to-spring-wood ring-spring-wood/30 hover:ring-highlight-rn/40'
        } ${className}`}
        title={showTooltip ? undefined : techConfig.thumbnailAltText}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="to-morocco-brown/10 absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="flex h-full w-full items-center justify-center">
          <Thumbnail
            thumbnailPath={techConfig.thumbnailPath}
            thumbnailAltText={techConfig.thumbnailAltText}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        {showDot && (
          <div className="from-highlight-rn/80 to-highlight-rn absolute -top-1 -right-1 h-2 w-2 rounded-full bg-gradient-to-br opacity-0 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"></div>
        )}
      </div>

      {showTooltip && isHovered && (
        <div className="absolute -top-10 left-1/2 z-50 -translate-x-1/2 transform">
          <div className="rounded-md bg-gray-800 px-2 py-1 text-sm whitespace-nowrap text-white shadow-lg">
            {techConfig.thumbnailAltText}
            <div className="absolute top-full left-1/2 -translate-x-1/2 transform">
              <div className="border-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
