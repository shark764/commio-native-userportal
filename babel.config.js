// const path = require('path');
// const pak = require('../rn-library-test-aug17/package.json');
// const pak = require('../sds-react-native-components/package.json');
// const pak = {
//   name: 'rn-library-test-aug17',
//   name: '@2600hz/sds-react-native-components',
//   source: 'src/index',
// };

// sds-react-native-components
// const dirName = pak.name.split('/')[1];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': './src',
            '@assets': './src/assets',
            '@components': './src/components',
            '@config': './src/config',
            '@containers': './src/containers',
            '@helpers': './src/helpers',
            '@hooks': './src/hooks',
            '@modules': './src/modules',
            '@providers': './src/providers',
            '@shared': './src/shared',
            '@stores': './src/stores',
            '@styles': './src/styles',
            '@utilities': './src/utilities',
            tests: ['./tests/'],

            // For development, we want to alias the library to the source
            // [pak.name]: path.join(__dirname, '..', pak.name, pak.source),
            // [pak.name]: path.join(__dirname, '..', dirName, pak.source),
          },
        },
      ],
      // [
      //   'babel-plugin-inline-import',
      //   {
      //     extensions: ['.svg'],
      //   },
      // ],
    ],
  };
};
