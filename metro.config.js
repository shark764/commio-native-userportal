const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');
const escape = require('escape-string-regexp');

// Learn more https://docs.expo.io/guides/customizing-metro

// expo v41:
// remove the @ (see: https://blog.expo.io/expo-sdk-41-12cc5232f2ef)
const { getDefaultConfig } = require('expo/metro-config');

// const pak = require('../rn-library-test-aug17/package.json');
// const pak = require('../sds-react-native-components/package.json');
const pak = {
  peerDependencies: {
    '@2600hz/sds-core': '^1.0.5',
    '@2600hz/sds-telicon': '^1.0.3',
    react: '*',
    'react-native': '*',
    'react-native-svg': '*',
    'styled-components': '*',
  },
};
// sds-react-native-components
// const root = path.resolve(__dirname, '..', 'rn-library-test-aug17');
// const dirName = pak.name.split('/')[1];
// const root = path.resolve(__dirname, '..', dirName);

const modules = Object.keys({
  ...pak.peerDependencies,
});

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    projectRoot: __dirname,
    // watchFolders: [root],
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },

    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],

      // We need to make sure that only one version is loaded for peerDependencies
      // So we blacklist them at the root, and alias them to the versions in example's node_modules
      // blacklistRE: blacklist(modules.map((m) => new RegExp(`^${escape(path.join(root, 'node_modules', m))}\\/.*$`))),

      extraNodeModules: modules.reduce((acc, name) => {
        acc[name] = path.join(__dirname, 'node_modules', name);
        return acc;
      }, {}),
    },
  };
})();
