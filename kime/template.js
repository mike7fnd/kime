const path = require('path');
const express = require('express');

class Template {
    constructor(app, viewsPath) {
        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, '..', viewsPath));
        app.use(express.static(path.join(__dirname, '..', viewsPath)));
    }

    render(res, view, data = {}) {
        res.render(view, data);
    }
}

module.exports = Template;
