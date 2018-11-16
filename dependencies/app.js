function app(
    expressApp,
    
    errorSetup,
    middlewareSetup,
    routeSetup
) {
    'use strict';

    middlewareSetup.registerMiddleware();
    routeSetup.registerRoutes();
    errorSetup.registerErrorHandlers();

    expressApp.listen(8080, () => console.log('Listening on port 8080.'));
}

module.exports = app;