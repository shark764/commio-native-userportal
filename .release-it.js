const { releaseItBaseConfig } = require('@2600hz/commio-native-utilities');

releaseItBaseConfig.npm.publish = false;
delete releaseItBaseConfig.hooks['after:bump'];

module.exports = releaseItBaseConfig;
