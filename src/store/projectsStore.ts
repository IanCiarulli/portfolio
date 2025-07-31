import { atom } from 'jotai';
import { Projects } from './projectsData';
import type { Project } from '../models';

export const projectsAtom = atom<Project[]>(Projects);

export const selectedProjectAtom = atom<Project | null>(null);

export const selectedTechAtom = atom<string | null>(null);

export const isModalOpenAtom = atom<boolean>(false);

export const selectedProjectTechsAtom = atom((get) => {
  const selectedProject = get(selectedProjectAtom);
  if (!selectedProject?.techs) return [];

  return selectedProject.techs;
});
