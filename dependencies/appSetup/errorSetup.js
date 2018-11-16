function errorSetup(
    expressApp,
    errorHandlers
) {

    function registerErrorHandlers() {
        expressApp.use(errorHandlers.notFoundHandler);
        expressApp.use(errorHandlers.unhandledErrorHandler);
    }

    return {
        registerErrorHandlers: registerErrorHandlers
    }
}

module.exports = errorSetup;