class Router {
    constructor() {
        this.routes = [];
    }

    get(path, handler) {
        this.routes.push({ method: 'get', path, handler });
    }

    apply(app) {
        this.routes.forEach(route => {
            app[route.method](route.path, route.handler);
        });
    }
}

module.exports = Router;
