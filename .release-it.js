const { releaseItBaseConfig } = require('@dfhernandez/js-utilities');

releaseItBaseConfig.npm.publish = false;
delete releaseItBaseConfig.hooks['after:bump'];

module.exports = releaseItBaseConfig;
