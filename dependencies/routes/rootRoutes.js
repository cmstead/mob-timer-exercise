function rootRoutes(router) {
    'use strict';
    
    router.get('/', function (request, response) {
        response.send('It still works. Bully for you.');
    });

    return router;
}

module.exports = rootRoutes;