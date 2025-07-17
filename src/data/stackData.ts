import { THUMBNAILS_URL } from '../constants';

export const coreStack = [
  {
    thumbnailPath: `${THUMBNAILS_URL}react.png`,
    thumbnailAltText: 'React Native',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}expo.png`,
    thumbnailAltText: 'Expo',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}typescript.png`,
    thumbnailAltText: 'TypeScript',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}copilot.png`,
    thumbnailAltText: 'Copilot',
  },
];

export const stateManagementStack = [
  {
    thumbnailPath: `${THUMBNAILS_URL}redux.png`,
    thumbnailAltText: 'Redux',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}zustand.png`,
    thumbnailAltText: 'Zustand',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}jotai.png`,
    thumbnailAltText: 'Jotai',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}graphql.png`,
    thumbnailAltText: 'GraphQL',
  },
];

export const testingStack = [
  {
    thumbnailPath: `${THUMBNAILS_URL}jest.png`,
    thumbnailAltText: 'Jest',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}detox.png`,
    thumbnailAltText: 'Detox',
  },
];

export const techStackData = [
  {
    title: 'Core',
    data: coreStack,
  },
  {
    title: 'State Management',
    data: stateManagementStack,
  },
  {
    title: 'Testing',
    data: testingStack,
  },
];
