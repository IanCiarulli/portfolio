import { PROJECT_THUMBNAILS } from '../constants';
import type { Project } from '../models';

export const Projects: Project[] = [
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.LA_BRAVA,
    },
    title: 'La Brava CSR',
    role: 'Sole Engineer',
    desc: 'A zero-maintenance app for the business to track customer feedback.',
    techs: [
      { tech: 'REACT', version: '18.3.1' },
      { tech: 'REACT_NATIVE', version: '0.76.9' },
      { tech: 'TYPESCRIPT', version: '5.3.3' },
      { tech: 'EXPO', version: '52.0.44' },
      { tech: 'ZUSTAND', version: '4.5.0' },
      { tech: 'JEST', version: '29.2.1' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.ZEST,
    },
    title: 'Zest Partner Program',
    role: 'React Native Team Lead',
    desc: 'Partner program mobile app for business partnerships and collaboration.',
    techs: [
      { tech: 'REACT', version: '17.0.2' },
      { tech: 'REACT_NATIVE', version: '0.69.0' },
      { tech: 'TYPESCRIPT', version: '4.7.4' },
      { tech: 'EXPO', version: '45.0.0' },
      { tech: 'ZUSTAND', version: '3.7.1' },
      { tech: 'JEST', version: '28.1.0' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.CHANEL,
    },
    title: 'Chanel Beauty Atelier',
    role: 'React Native Developer',
    desc: 'App developed for Chanel Beauty Atelier store opening in Austin, TX.',
    techs: [
      { tech: 'REACT', version: '17.0.2' },
      { tech: 'REACT_NATIVE', version: '0.67.2' },
      { tech: 'TYPESCRIPT', version: '4.5.5' },
      { tech: 'EXPO', version: '44.0.0' },
      { tech: 'ZUSTAND', version: '3.7.1' },
      { tech: 'JEST', version: '27.5.1' },
      { tech: 'DETOX', version: '19.8.0' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.DOLBY,
    },
    title: 'Dolby XP - HUB',
    role: 'React Native Developer',
    desc: "Dolby's multi-platform app for proprietary content and immersive audio.",
    techs: [
      { tech: 'REACT', version: '17.0.2' },
      { tech: 'REACT_NATIVE', version: '0.66.5' },
      { tech: 'TYPESCRIPT', version: '4.4.4' },
      { tech: 'FIREBASE', version: '12.6.1' },
      { tech: 'MOBX', version: '2.2.2' },
      { tech: 'JEST', version: '26.3.0' },
      { tech: 'STYLED_COMPONENTS', version: '5.3.0' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.THREE43,
    },
    title: 'Three43',
    role: 'React Native Developer',
    desc: 'Art Marketplace with Blockchain for secure digital art and NFT transactions.',
    techs: [
      { tech: 'REACT', version: '16.9.0' },
      { tech: 'REACT_NATIVE', version: '0.61.2' },
      { tech: 'TYPESCRIPT', version: '3.6.3' },
      { tech: 'GRAPHQL', version: '14.5.7' },
      { tech: 'APOLLO', version: '2.6.8' },
      { tech: 'JEST', version: '24.9.0' },
      { tech: 'STYLED_COMPONENTS', version: '4.4.0' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.MOTORCULTURE,
    },
    title: 'Motorculture',
    role: 'React Native Developer',
    desc: 'Social network for motor lovers with community and vehicle showcases.',
    techs: [
      { tech: 'REACT', version: '16.8.6' },
      { tech: 'REACT_NATIVE', version: '0.59.9' },
      { tech: 'REACT_NATIVE_NAV', version: '2.0.2' },
      { tech: 'TYPESCRIPT', version: '3.5.3' },
      { tech: 'MOBX', version: '4.0.1' },
      { tech: 'SENTRY', version: '0.43.1' },
      { tech: 'JEST', version: '24.8.0' },
      { tech: 'DETOX', version: '10.0.7' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.VIGIT,
    },
    title: 'Vigit',
    role: 'React Native Developer',
    desc: 'Social media analytics platform with performance insights for creators.',
    techs: [
      { tech: 'REACT', version: '16.8.4' },
      { tech: 'REACT_NATIVE', version: '0.59.5' },
      { tech: 'TYPESCRIPT', version: '3.5.3' },
      { tech: 'REDUX', version: '4.0.1' },
      { tech: 'EXPO', version: '33.0.0' },
      { tech: 'JEST', version: '24.7.0' },
      { tech: 'FIREBASE', version: '6.2.0' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.COSMO,
    },
    title: 'Cosmo',
    role: 'React Native Developer',
    desc: 'MultiStore eCommerce App with seamless shopping across vendors.',
    techs: [
      { tech: 'REACT', version: '16.8.0' },
      { tech: 'REACT_NATIVE', version: '0.58.6' },
      { tech: 'REDUX', version: '4.0.1' },
      { tech: 'JEST', version: '24.1.0' },
      { tech: 'SENTRY', version: '0.43.1' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.DARE_YOU,
    },
    title: 'Dare You',
    role: 'React Native Developer',
    desc: 'Challenge friends and go viral! Social gaming platform for competitive challenges.',
    techs: [
      { tech: 'REACT', version: '16.7.0' },
      { tech: 'REACT_NATIVE', version: '0.58.4' },
      { tech: 'REACT_NATIVE_NAV', version: '1.1.4' },
      { tech: 'REDUX', version: '4.0.0' },
      { tech: 'GRAPHQL', version: '14.0.2' },
      { tech: 'JEST', version: '24.1.0' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.SAIPROP,
    },
    title: 'Saiprop',
    role: 'React Native Developer',
    desc: 'Rental management system for property owners and tenants.',
    techs: [
      { tech: 'REACT', version: '16.8.1' },
      { tech: 'REACT_NATIVE', version: '0.58.5' },
      { tech: 'REACT_NATIVE_NAV', version: '1.1.4' },
      { tech: 'REDUX', version: '4.0.0' },
      { tech: 'JEST', version: '24.0.0' },
      { tech: 'DETOX', version: '10.0.7' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.DROPDESK,
    },
    title: 'Dropdesk',
    role: 'React Native Developer',
    desc: 'Rental platform for work and recreational spaces with flexible solutions.',
    techs: [
      { tech: 'REACT', version: '16.6.3' },
      { tech: 'REACT_NATIVE', version: '0.57.8' },
      { tech: 'REACT_NATIVE_NAV', version: '2.0.2' },
      { tech: 'EXPO', version: '32.0.0' },
      { tech: 'REDUX', version: '4.0.0' },
      { tech: 'SENTRY', version: '0.43.1' }, //check
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.INGAGEDIN,
    },
    title: 'Ingagedin',
    role: 'React Native Developer',
    desc: 'Platform to give visibility to specific causes using Internet power.',
    techs: [
      { tech: 'REACT', version: '16.6.3' },
      { tech: 'REACT_NATIVE', version: '0.57.8' },
      { tech: 'EXPO', version: '32.0.0' },
      { tech: 'MOBX', version: '4.0.0' },
      { tech: 'JEST', version: '23.6.0' },
      { tech: 'DETOX', version: '9.0.6' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.ACCOMPLISH,
    },
    title: 'Now Accomplish',
    role: 'React Native Developer',
    desc: 'Productivity and goal tracking app with comprehensive task management.',
    techs: [
      { tech: 'REACT', version: '16.6.0' },
      { tech: 'REACT_NATIVE', version: '0.57.8' },
      { tech: 'REACT_NATIVE_NAV', version: '2.0.2' },
      { tech: 'REDUX', version: '4.0.0' },
      { tech: 'EXPO', version: '32.0.0' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.POLLAPP,
    },
    title: 'Pollap',
    role: 'React Native Developer',
    desc: 'Socialize, play, vote, win - Interactive social gaming platform.',
    techs: [
      { tech: 'REACT', version: '16.4.1' },
      { tech: 'REACT_NATIVE', version: '0.56.0' },
      { tech: 'REDUX', version: '4.0.0' },
      { tech: 'FIREBASE', version: '5.5.0' },
      { tech: 'JEST', version: '23.6.0' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.EVERWASH,
    },
    title: 'Everwash',
    role: 'React Native Developer',
    desc: 'Car maintenance and wash appointment app with convenient scheduling.',
    techs: [
      { tech: 'REACT', version: '16.4.1' },
      { tech: 'REACT_NATIVE', version: '0.56.0' },
      { tech: 'REDUX', version: '4.0.0' },
      { tech: 'FIREBASE', version: '5.5.0' },
      { tech: 'JEST', version: '23.6.0' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.APLACASH,
    },
    title: 'AplaCash',
    role: 'React Native Developer',
    desc: 'A comprehensive financial application providing digital payment solutions, money transfers, and mobile banking services.',
    techs: [
      { tech: 'REACT', version: '16.3.0' },
      { tech: 'REACT_NATIVE', version: '0.55.4' },
      { tech: 'REACT_NATIVE_NAV', version: '2.0.0' },
      { tech: 'EXPO', version: '27.0.0' },
      { tech: 'REDUX', version: '4.0.0' },
      { tech: 'LOTTIE', version: '2.5.0' },
    ],
  },
  {
    projectThumbnail: {
      ...PROJECT_THUMBNAILS.HOLCIM,
    },
    title: 'Holcim H&S',
    role: 'React Native Developer',
    desc: 'An application developed for the employees of Holcim Argentina focusing on health and safety protocols in industrial environments.',
    techs: [
      { tech: 'REACT', version: '16.3.0' },
      { tech: 'REACT_NATIVE', version: '0.55.4' },
      { tech: 'REACT_NATIVE_NAV', version: '2.0.0' },
      { tech: 'REDUX', version: '4.0.0' },
      { tech: 'JEST', version: '22.4.3' },
    ],
  },
];
