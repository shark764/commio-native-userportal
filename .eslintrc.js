const { eslintNativeConfig } = require('@dfhernandez/js-utilities');

const nativeConfig = eslintNativeConfig(__dirname);
nativeConfig.rules = {
  ...nativeConfig.rules,
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
      pathGroups: [
        {
          pattern: 'react+(|-native)',
          group: 'external',
          position: 'before',
        },
        {
          pattern: '@/**',
          group: 'parent',
          position: 'before',
        },
        {
          pattern: '@**/**',
          group: 'parent',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: ['react'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
};

module.exports = nativeConfig;
