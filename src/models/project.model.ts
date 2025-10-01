import { TECHS } from '../constants';
import { Thumbnail } from './thumbnail.model';

export interface TechWithVersion {
  tech: keyof typeof TECHS;
  version: string;
}

export interface Project {
  projectThumbnail: Thumbnail;
  title: string;
  role: string;
  desc: string;
  techs?: TechWithVersion[];
  techCount?: number;
}
export interface ProjectGrid {
  items: Project[];
  forwardRef?: React.Ref<HTMLElement>;
}
