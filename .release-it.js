const { releaseItBaseConfig } = require('@dfhernandez/js-utilities');

delete releaseItBaseConfig.npm;
delete releaseItBaseConfig.hooks['after:bump'];

module.exports = releaseItBaseConfig;
