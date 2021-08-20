const path = require('path');
const pak = require('../sds-react-native-components/package.json');
// const pak = {
//   name: '@2600hz/sds-react-native-components',
//   source: 'src/index',
// };

// sds-react-native-components
const dirName = pak.name.split('/')[1];

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
            '@containers': './src/containers',
            '@components': './src/components',
            '@modules': './src/modules',
            '@styles': './src/styles',
            tests: ['./tests/'],

            // For development, we want to alias the library to the source
            [pak.name]: path.join(__dirname, '..', dirName, pak.source),
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
