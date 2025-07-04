export type TECHNOLOGIES_DATA_TYPE = {
  [key: string]: {
    thumbnailPath: string;
    thumbnailAltText: string;
    thumbnailLink: string;
    shadowColor: string;
  };
};

export const TECHNOLOGIES_DATA: TECHNOLOGIES_DATA_TYPE = {
  reactNative: {
    thumbnailPath: '/reactnative.svg',
    thumbnailAltText: 'React Native thumbnail',
    thumbnailLink: 'https://reactnative.dev/',
    shadowColor: '#000000',
  },
  typescript: {
    thumbnailPath: '/typescript.svg',
    thumbnailAltText: 'TypeScript thumbnail',
    thumbnailLink: 'https://www.typescriptlang.org/',
    shadowColor: '#000000',
  },
  expo: {
    thumbnailPath: '/expo.svg',
    thumbnailAltText: 'Expo thumbnail',
    thumbnailLink: 'https://expo.dev/',
    shadowColor: '#000000',
  },
};
