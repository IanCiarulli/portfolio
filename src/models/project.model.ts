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
  techs?: TechWithVersion[];
  techCount?: number;
}
export interface ProjectsList {
  items: Project[];
  title: string;
}
