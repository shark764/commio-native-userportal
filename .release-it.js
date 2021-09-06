const { releaseItBaseConfig } = require('@2600hz/js-utilities');

releaseItBaseConfig.npm.publish = false;
delete releaseItBaseConfig.hooks['after:bump'];

module.exports = releaseItBaseConfig;
