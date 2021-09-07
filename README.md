<div align="center">
  <a href="#">
  	<img src="https://media.giphy.com/media/GHeV8BGjJAAWk/giphy.gif" alt="React Native App" height="160" />
  </a>
  <br>
  <br>
  <p>
    <b>react-native-commio-userportal</b>
  </p>
  <p>
     <i>React native application for commio-userportal development.</i>
  </p>
  <p>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

  </p>
</div>

---

# 2600Hz - Commio
## _react-native-commio-userportal_

App that contains User Portal module of Comm.io

# Development

This project requires [Node.js](https://nodejs.org/) v14+ to run.

Using *.nvmrc* file helps to normalize node version used by all maintainers.
If you are required to use version specified in this file, run these commands.

```bash
nvm use
nvm install
```

Use the package manager [yarn](https://yarnpkg.com/getting-started/install) v1+ to install dependencies and devDependencies.

```bash
yarn install
# or just
yarn
```

## Components library

**Usage**
Install it by running
```bash
yarn add @dfhernandez/sds-react-native-components
```

**Development and testing**
In case you need to work on the library locally, you can link it to userportal app by adding a symlink
This doesn't work same way as web apps, there are more configurations needed in order to work properly

**Add symlink**
See [Linked library](https://github.com/shark764/@dfhernandez/sds-react-native-components)

**Consume the package @dfhernandez/sds-react-native-components**
`Both projects must be placed on same folder, otherwise won't work`
```bash
yarn link @dfhernandez/sds-react-native-components
```

**Fix for peerDependencies**
Go to `metro` config file and add this
```js
// metro.config.js
const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');
const escape = require('escape-string-regexp');

// Assuming your package folder is named "sds-react-native-components" and it's located right next to the app folder
const root = path.resolve(__dirname, '..', 'sds-react-native-components');

const modules = [
  '@dfhernandez/js-utilities',
  '@dfhernandez/sds-native-theme',
  'react',
  'react-dom',
  'react-native',
  'react-native-svg',
  'styled-components',
  'tslib',
];
module.exports = (async () => {
  return {
    projectRoot: __dirname,
    watchFolders: [root],
    // ...
    resolver: {
      // We need to make sure that only one version is loaded for peerDependencies
      // So we blacklist them at the root, and alias them to the versions in example's node_modules
      blacklistRE: blacklist(
        modules.map(
          (m) =>
            new RegExp(`^${escape(path.join(root, 'node_modules', m))}\\/.*$`)
        )
      ),

      extraNodeModules: modules.reduce((acc, name) => {
        acc[name] = path.join(__dirname, 'node_modules', name);
        return acc;
      }, {}),
    },
    // ...
  };
})();
```

Now use that in `webpack` file
```js
// webpack.config.js
const metroConfig = require('./metro.config');
const node_modules = path.join(__dirname, 'node_modules');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  const { resolver } = await metroConfig;

  // We need to make sure that only one version is loaded for peerDependencies
  // So we alias them to the versions in example's node_modules
  Object.assign(config.resolve.alias, {
    ...resolver.extraNodeModules,
  });

  return config;
};
```

Add package as alias in `babel.config.js`
```js
// babel.config.js
const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    // ...
    plugins: [
      // ...
      [
        'module-resolver',
        {
          alias: {
            // ...

            // For development, we want to alias the library to the source
            // Remember we have the package folder right next to the app
            '@dfhernandez/sds-react-native-components': path.join(__dirname, '..', 'sds-react-native-components', 'src/index'),
          },
        },
      ],
    ],
  };
};
```

## Publishing for testing
Run
```bash
expo publish
```
It will update configuration for release, if you are doing for the first time, you'll need to run `expo publish` again with the new changes
For assets optimization, run
```bash
# If you don't have it
npm install -g sharp-cli
npx expo-optimize
```
Then run `expo publish` again.

**Android**
`expo publish` It will generate a link that you can share with your coworkers. You only need [Expo Go](https://expo.dev/client) App installed on your phone and you will be able to open the link and test the app.
The same link will work for every update you make.
Any time you want to deploy an update, run `expo publish` again and a new version will be available immediately to your users the next time they open it.
Read more about it on [How to publish](https://docs.expo.dev/workflow/publishing/#how-to-publish)

## Run app

**Run project**
```bash
yarn start
```

Run with silent mode
```bash
yarn expo:start
```

Run android
```bash
yarn android
```

Run ios
```bash
cd ios & pod install
yarn ios
```

## Utilities

Format code using [Eslint](https://eslint.org/)

```bash
yarn run lint:fix
```

Format code using [Prettier](https://prettier.io/)
```bash
yarn run format
```

Format code using [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/)
```bash
yarn run prettify
```

Check [Typescript](https://www.typescriptlang.org/docs/handbook/react.html) on files
```bash
yarn run typescript
```

Run full check
```bash
yarn run full-check
```

## Tech
Userportal uses a number of open source projects to work properly:

- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces.
- [React Native](https://reactnative.dev/) - JavaScript library for creating native apps for Android and IOS using React.
- [Typescript](https://www.typescriptlang.org/docs/handbook/react.html) - Strongly typed programming language which builds on JavaScript
- [NodeJs](https://nodejs.org/es/) - Allows execute javascript scripts on the terminal
- [Luxon](https://moment.github.io/luxon/) - library for dealing with dates and times in JavaScript (better alternative than Moment.js)
- [Styled-Components](https://styled-components.com/) - Library to style react components
- [react-native-svg](https://www.npmjs.com/package/react-native-svg) - Provides SVG support to React Native on iOS and Android, and a compatibility layer for the web
- [@dfhernandez/sds-react-native-components](https://www.npmjs.com/package/@dfhernandez/sds-react-native-components) - React Native components
- [@dfhernandez/sds-native-theme](https://www.npmjs.com/package/@dfhernandez/sds-native-theme) - React Native Theme for Styled-components
- [@dfhernandez/js-utilities](https://www.npmjs.com/package/@dfhernandez/js-utilities) - Library written in js for shareable config files and common functions

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

**Commits**
Commits must follow [conventional commit format](https://conventionalcommits.org/)
Make sure your messages look like the following examples
```
feat: Adding new badge component
fix: Touchable component not being exported correctly
fix!: Drop support for Typescript
```
_Note that the last one will generate a Major commit. It has the same result as adding a breaking change footer_

Follow [Semantic Versioning 2.0.0](https://semver.org/) to update project version.

[Release-It](https://github.com/release-it/release-it) will take care of versioning, you just have to give the correct type to commit:

- **fix** - to indicate a bug fix (PATCH) ex . v0.0.1
- **feat** - to indicate a new feature (MINOR) ex. v0.1.0
- **chore** - for updates that do not require a version bump (.gitignore, comments, etc.)
- **docs** - for updates to the documentation
- **BREAKING CHANGE** - regardless of type, indicates a Major release (MAJOR) ex. v1.0.0

Visit [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more examples.

**Make a release**
Run following command after your last commit/amend. Then answer with Y/N the prompt
```bash
yarn release
```

## License

MIT
