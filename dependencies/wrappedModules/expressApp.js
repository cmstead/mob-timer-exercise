function expressApp(express) {
    'use strict';
    
    return express();
}

expressApp['@singleton'] = true;

module.exports = expressApp;