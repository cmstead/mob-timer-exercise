function errorHandlers(statusCodes) {
    'use strict';
    
    function notFoundHandler(request, response, next) {
        const notFoundError = new Error('Not Found');

        notFoundError.status = statusCodes.notFound;

        next(notFoundError);
    }

    function getErrorStatus(error) {
        return typeof error.status === 'number' ? error.status : 500;
    }

    function unhandledErrorHandler(error, request, response, next) {

        if(!response.headersSent) {
            const errorStatus = getErrorStatus(error);

            response
                .status(errorStatus)
                .write(error.message)
                .end();
        }

        next(error);
    }

    return {
        notFoundHandler: notFoundHandler,
        unhandledErrorHandler: unhandledErrorHandler
    };
}

module.exports = errorHandlers;