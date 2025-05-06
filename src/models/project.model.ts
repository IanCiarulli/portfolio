export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  technologies: {
    icon: string;
    name: string;
  }[];
}
