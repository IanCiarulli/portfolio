import { TECHS } from '../constants';

export interface ThumbnailProps {
  thumbnailPath: string;
  thumbnailAltText: string;
  className?: string;
}

export interface TechWithVersion {
  tech: keyof typeof TECHS;
  version: string;
}

export interface ProjectProps extends ThumbnailProps {
  title: string;
  role: string;
  techs?: TechWithVersion[];
}
