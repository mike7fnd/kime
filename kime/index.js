const express = require('express');
const bodyParser = require('body-parser');

class Kime {
    constructor() {
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    use(middleware) {
        this.app.use(middleware);
    }

    route(path, handler) {
        this.app.get(path, handler);
    }

    listen(port, callback) {
        this.app.listen(port, callback);
    }
}

module.exports = Kime;
