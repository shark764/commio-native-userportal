const { eslintNativeConfig } = require('@2600hz/commio-native-utilities');

const nativeConfig = eslintNativeConfig(__dirname);
nativeConfig.rules = {
  ...nativeConfig.rules,
  '@typescript-eslint/no-unsafe-assignment': 'warn',
  '@typescript-eslint/no-unsafe-call': 'warn',
  '@typescript-eslint/no-unsafe-member-access': 'warn',
  '@typescript-eslint/no-unsafe-return': 'warn',
};

module.exports = nativeConfig;
