import { type CSSProperties } from 'react';

export function Thumbnail({
  thumbnailPath,
  thumbnailAltText,
  thumbnailLink,
  shadowColor,
  className,
  onClick,
}: {
  thumbnailPath: string;
  thumbnailAltText: string;
  thumbnailLink: string;
  shadowColor: string;
  className?: string;
  onClick?: () => void;
}) {
  const clickable = typeof onClick === 'function';
  if (clickable) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`m-0 flex items-center justify-center border-none bg-transparent p-0 ${className ?? ''}`}
        style={
          {
            cursor: 'pointer',
            '--hover-shadow-color': shadowColor,
          } as CSSProperties
        }
      >
        <img
          src={thumbnailPath}
          aria-label={thumbnailAltText}
          className="logo"
        />
      </button>
    );
  }
  return (
    <a
      href={thumbnailLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center ${className ?? ''}`}
      style={{ '--hover-shadow-color': shadowColor } as CSSProperties}
    >
      <img src={thumbnailPath} aria-label={thumbnailAltText} className="logo" />
    </a>
  );
}
