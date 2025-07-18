import { TECHS } from '../constants';

export interface ThumbnailProps {
  thumbnailPath: string;
  thumbnailAltText: string;
  className?: string;
}

export interface ProjectProps extends ThumbnailProps {
  title: string;
  role: string;
  techs?: (keyof typeof TECHS)[];
}
