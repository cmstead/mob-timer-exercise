function routeSetup(
    expressApp,

    mobberRoutes,
    rootRoutes
) {
    'use strict';

    function registerRoutes() {
        expressApp.use('/', rootRoutes);
        expressApp.use('mobbers/', rootRoutes);
    }

    return {
        registerRoutes: registerRoutes
    }
}

module.exports = routeSetup;