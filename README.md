# 2600Hz - Commio
## _react-native-commio-userportal_

App that contains User Portal module of Comm.io

## Development

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
yarn
```

## Components library - Usage

Add symlink
See [Linked library](https://github.com/shark764/@2600hz/sds-react-native-components)

**Consume the package @2600hz/sds-react-native-components**
`Both projects must be placed on same folder, otherwise won't work`
```bash
yarn link @2600hz/sds-react-native-components
```

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
- [@2600hz/sds-react-native-components](https://www.npmjs.com/package/@2600hz/sds-react-native-components) - React Native components

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
