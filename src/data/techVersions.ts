export interface TechVersion {
  name: string;
  version: string;
}

export const TECH_VERSIONS: TechVersion[] = [
  { name: 'React Native', version: '^0.74.0' },
  { name: 'Expo', version: '^51.0.0' },
  { name: 'TypeScript', version: '^5.3.0' },
  { name: 'Copilot', version: '^1.0.0' },
  { name: 'Redux', version: '^5.0.0' },
  { name: 'Zustand', version: '^4.5.0' },
  { name: 'Jotai', version: '^2.8.0' },
  { name: 'GraphQL', version: '^16.8.0' },
  { name: 'Jest', version: '^29.7.0' },
  { name: 'Detox', version: '^20.19.0' },
];
