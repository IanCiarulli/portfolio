import { atom } from 'jotai';
import { ExperienceItems } from './experienceData';
import type { ExperienceItem } from '../models';

export const experienceAtom = atom<ExperienceItem[]>(ExperienceItems);

export const selectedExperienceAtom = atom<ExperienceItem | null>(null);
