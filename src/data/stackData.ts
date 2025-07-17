import { TECHS } from '../constants';

export const coreStack = [
  {
    ...TECHS.REACT_NATIVE,
    tooltip: 'The core of my daily toolkit — built everything around it',
  },
  {
    ...TECHS.EXPO,
    tooltip: 'My go-to for starting projects from scratch',
  },
  {
    ...TECHS.TYPESCRIPT,
    tooltip: 'Mandatory — strong types or exile',
  },
  {
    ...TECHS.COPILOT,
    tooltip: 'Essential for a fast, modern development flow',
  },
];

export const stateManagementStack = [
  {
    ...TECHS.REDUX,
    tooltip: 'Clear logic boundaries, perfect for scalable architectures',
  },
  {
    ...TECHS.ZUSTAND,
    tooltip: 'Lean, powerful, and dead simple for focused state needs',
  },
  {
    ...TECHS.JOTAI,
    tooltip: 'State as atoms — perfect for isolated, reactive flows',
  },
  {
    ...TECHS.GRAPHQL,
    tooltip: 'Typed, precise and clean — no wasteful data fetching',
  },
];

export const testingStack = [
  {
    ...TECHS.JEST,
    tooltip: 'Fast, focused, and reliable — my go-to for logic validation',
  },
  {
    ...TECHS.DETOX,
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
