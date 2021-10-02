// For React Native version 0.59 or later
const upstreamTransformer = require('metro-react-native-babel-transformer');
const sassTransformer = require('react-native-sass-transformer');
const svgTransformer = require('react-native-svg-transformer');

const sdsTools =
  `${process.cwd()}/node_modules/@2600hz/sds-core/sds-tools.scss`.replace(
    /\\/g,
    '/'
  );

module.exports.transform = function ({ src, filename, options }) {
  if (filename.endsWith('.svg')) {
    return svgTransformer.transform({ src, filename, options });
  }

  if (filename.endsWith('.scss') || filename.endsWith('.sass')) {
    const opts = Object.assign(options, {
      sassOptions: {
        functions: {
          'rem($px)': (px) => {
            px.setValue(px.getValue() / 16);
            px.setUnit('rem');
            return px;
          },
        },
      },
    });

    const sdsSrc = `@import "${sdsTools}"; \n\n ${src}`;

    return sassTransformer.transform({ src: sdsSrc, filename, options: opts });
  }
  return upstreamTransformer.transform({ src, filename, options });
};
