import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  icon: ReactNode;
}

export function Link({ href, icon }: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 transition-colors hover:text-white"
    >
      {icon}
    </a>
  );
}
