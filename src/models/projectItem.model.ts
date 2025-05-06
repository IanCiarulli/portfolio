export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  technologies: {
    icon: string;
    name: string;
  }[];
}
