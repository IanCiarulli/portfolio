import { THUMBNAILS_URL } from '../constants';

export const coreStack = [
  {
    thumbnailPath: `${THUMBNAILS_URL}react.png`,
    thumbnailAltText: 'React Native',
    tooltip: 'The core of my daily toolkit — built everything around it',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}expo.png`,
    thumbnailAltText: 'Expo',
    tooltip: 'My go-to for starting projects from scratch',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}typescript.png`,
    thumbnailAltText: 'TypeScript',
    tooltip: 'Mandatory — strong types or exile',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}copilot.png`,
    thumbnailAltText: 'Copilot',
    tooltip: 'Essential for a fast, modern development flow',
  },
];

export const stateManagementStack = [
  {
    thumbnailPath: `${THUMBNAILS_URL}redux.png`,
    thumbnailAltText: 'Redux',
    tooltip: 'Clear logic boundaries, perfect for scalable architectures',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}zustand.png`,
    thumbnailAltText: 'Zustand',
    tooltip: 'Lean, powerful, and dead simple for focused state needs',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}jotai.png`,
    thumbnailAltText: 'Jotai',
    tooltip: 'State as atoms — perfect for isolated, reactive flows',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}graphql.png`,
    thumbnailAltText: 'GraphQL',
    tooltip: 'Typed, precise and clean — no wasteful data fetching',
  },
];

export const testingStack = [
  {
    thumbnailPath: `${THUMBNAILS_URL}jest.png`,
    thumbnailAltText: 'Jest',
    tooltip: 'Fast, focused, and reliable — my go-to for logic validation',
  },
  {
    thumbnailPath: `${THUMBNAILS_URL}detox.png`,
    thumbnailAltText: 'Detox',
    tooltip: 'When flows *must* work on device, not just in theory',
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
