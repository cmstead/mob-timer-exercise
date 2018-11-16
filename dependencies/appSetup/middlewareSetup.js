function middlewareSetup(
    bodyParser,
    expressApp
) {
    'use strict';
    
    function registerMiddleware () {
        expressApp.use(bodyParser.urlencoded({ extended: false }));
        expressApp.use(bodyParser.json());
    }

    return {
        registerMiddleware: registerMiddleware
    };
}

module.exports = middlewareSetup;