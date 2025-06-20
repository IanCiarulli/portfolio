type TECHNOLOGIES_DATA_TYPE = {
  [key: string]: {
    iconPath: string;
    iconAltText: string;
    iconLink: string;
    shadowColor: string;
  };
};

export const TECHNOLOGIES_DATA: TECHNOLOGIES_DATA_TYPE = {
  reactNative: {
    iconPath: '/reactnative.svg',
    iconAltText: 'React Native Icon',
    iconLink: 'https://reactnative.dev/',
    shadowColor: '#000000',
  },
  typescript: {
    iconPath: '/typescript.svg',
    iconAltText: 'TypeScript Icon',
    iconLink: 'https://www.typescriptlang.org/',
    shadowColor: '#000000',
  },
  expo: {
    iconPath: '/expo.svg',
    iconAltText: 'Expo Icon',
    iconLink: 'https://expo.dev/',
    shadowColor: '#000000',
  },
};
