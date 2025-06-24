export function Thumbnail({
  iconPath,
  iconAltText,
  iconLink,
  shadowColor,
  className,
}: {
  iconPath: string;
  iconAltText: string;
  iconLink: string;
  shadowColor: string;
  className: string;
}) {
  return (
    <a
      href={iconLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center"
    >
      <img
        src={iconPath}
        aria-label={iconAltText}
        className={`logo ${className}`}
        style={{ '--hover-shadow-color': shadowColor } as React.CSSProperties}
      />
    </a>
  );
}
