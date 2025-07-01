export function Thumbnail({
  iconPath,
  iconAltText,
  iconLink,
  shadowColor,
  className,
  onClick,
}: {
  iconPath: string;
  iconAltText: string;
  iconLink: string;
  shadowColor: string;
  className: string;
  onClick?: () => void;
}) {
  const clickable = typeof onClick === 'function';
  if (clickable) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`m-0 flex items-center justify-center border-none bg-transparent p-0 ${className}`}
        style={
          {
            cursor: 'pointer',
            '--hover-shadow-color': shadowColor,
          } as React.CSSProperties
        }
      >
        <img src={iconPath} aria-label={iconAltText} className="logo" />
      </button>
    );
  }
  return (
    <a
      href={iconLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center ${className}`}
      style={{ '--hover-shadow-color': shadowColor } as React.CSSProperties}
    >
      <img src={iconPath} aria-label={iconAltText} className="logo" />
    </a>
  );
}
