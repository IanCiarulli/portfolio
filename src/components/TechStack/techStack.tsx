export function TechStack({
  title,
  icons,
}: {
  title: string;
  icons: string[];
}) {
  return (
    <div className="flex flex-col items-center pt-8">
      <h2 className="mb-4 text-center text-xl font-bold">{title}</h2>
      <div className="flex justify-center space-x-4">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Icon ${index}`}
            className="h-16 w-16 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
