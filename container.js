'use strict'

const path = require('path');

const config = {
    cwd: path.join(__dirname, 'dependencies'),
    modulePaths: [
        '',
        'appSetup',
        'constants',
        'data',
        'data/coreDataServices',
        'routes',
        'types',
        'wrappedModules'
    ],
    allowOverride: false,
    eagerLoad: false,
    errorOnModuleDNE: true
};

module.exports = require('dject').new(config);