const setViewEngine = require('./viewengine');
const setMiddlewareLoader = require('./middleware');
const setRoutes = require('./routes');

module.exports = (app) => {
    let server = app;

    server = setViewEngine(server);
    server = setMiddlewareLoader(server);
    server = setRoutes(server);

    return server;
}