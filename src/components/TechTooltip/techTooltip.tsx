import { ReactNode } from 'react';

interface TechTooltipProps {
  tooltip?: string;
  className?: string;
  children: ReactNode;
}

export const TechTooltip = ({
  tooltip = `I use this technology in production projects`,
  className = '',
  children,
}: TechTooltipProps) => {
  return (
    <div className={`group relative ${className}`}>
      <div className="pointer-events-none absolute top-[-25px] left-1/2 z-10 -translate-x-1/2 scale-95 rounded-md bg-[#333] px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 shadow-md transition-all duration-150 group-hover:scale-100 group-hover:opacity-100">
        {tooltip}
      </div>
      {children}
    </div>
  );
};
