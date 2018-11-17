const signet = require('signet')();

require('./coreTypes')(signet);

module.exports = signet;