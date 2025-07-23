import { TECHS } from '../constants';

export const coreStack = [
  {
    ...TECHS.REACT_NATIVE,
    tooltip: "My daily bread — I've built all my apps with this beauty",
  },
  {
    ...TECHS.TYPESCRIPT,
    tooltip:
      'I see no reason to go back to JavaScript — types help way too much to keep things in order',
  },
  {
    ...TECHS.EXPO,
    tooltip: 'I reach for this first when starting any new project',
  },
  {
    ...TECHS.COPILOT,
    tooltip: 'My coding companion — speeds up my workflow like crazy',
  },
];

export const stateManagementStack = [
  {
    ...TECHS.REDUX,
    tooltip: 'My go-to for complex apps — I love its predictable patterns',
  },
  {
    ...TECHS.ZUSTAND,
    tooltip: 'I use this when I want Redux power without the boilerplate',
  },
  {
    ...TECHS.JOTAI,
    tooltip: "I'm exploring this for granular, reactive state management",
  },
  {
    ...TECHS.MOBX,
    tooltip: 'Used this to orchestrate state across 4 platforms in Dolby',
  },
];

export const testingStack = [
  {
    ...TECHS.JEST,
    tooltip: "I write unit tests with this — it's fast and reliable",
  },
  {
    ...TECHS.DETOX,
    tooltip: 'When I need to test real user flows on actual devices',
  },
];

export const techStackData = [
  {
    title: 'Core',
    data: coreStack,
  },
  {
    title: 'State',
    data: stateManagementStack,
  },
  {
    title: 'Testing',
    data: testingStack,
  },
];
