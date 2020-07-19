import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              ArtistsScreen: 'ArtistsScreen',
            },
          },
          TabTwo: {
            screens: {
              AlbumsScreen: 'AlbumsScreen',
            },
          },
          TabThree: {
            screens: {
              TracksScreen: 'TracksScreen',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
