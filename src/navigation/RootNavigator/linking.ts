import type { LinkingOptions } from '@react-navigation/native';

export const linking: LinkingOptions<Record<string, object | undefined>> = {
  prefixes: ['pickupapp://'],
  config: {
    screens: {
      Login: 'login',
      Preference: 'preference',
      Summary: 'summary',
    },
  },
};
