import { atom } from 'jotai';
import { Projects } from '../data/projectsData';
import type { ProjectProps } from '../models';

export const projectsAtom = atom<ProjectProps[]>(Projects);

export const selectedProjectAtom = atom<ProjectProps | null>(null);

export const selectedTechAtom = atom<string | null>(null);

export const isModalOpenAtom = atom<boolean>(false);

export const selectedProjectTechsAtom = atom((get) => {
  const selectedProject = get(selectedProjectAtom);
  if (!selectedProject?.techs) return [];

  return selectedProject.techs;
});
