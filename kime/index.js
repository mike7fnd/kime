const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const favicon = require('serve-favicon');

class Kime {
  constructor() {
    this.app = express();
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    // Set default view engine to EJS
    this.app.set('view engine', 'ejs');
    // Set views directory to app/views
    this.app.set('views', path.join(__dirname, '..', 'app', 'views'));
    // Serve static files from app/views directory
    this.app.use(express.static(path.join(__dirname, '..', 'app', 'views')));
    // Serve static files from app/public directory
    this.app.use(express.static(path.join(__dirname, '..', 'app', 'public')));
    // Serve favicon
    this.app.use(favicon(path.join(__dirname, '..', 'app', 'public', 'kime.ico')));
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
