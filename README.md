# Kime Framework

A lightweight Node.js web framework with CLI for rapid application development.

## Installation

```bash
npm install -g kime-framework
```

## Creating a New Project

```bash
kime new my-app
cd my-app
npm install
npm start
```

## Features

- Simple routing system
- Template engine support (EJS)
- CLI for project generation and management
- Controller and model scaffolding

## Usage

### CLI Commands

- `kime new <project-name>` - Create a new Kime project
- `kime create controller <name>` - Create a new controller
- `kime create model <name>` - Create a new model
- `kime serve` - Serve the application
- `kime --version` - Show version

### Basic Server Setup

```javascript
const { Kime, Router, Template } = require('kime-framework');

const app = new Kime();
const router = new Router();
new Template(app.app, 'views');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.apply(app.app);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

## Project Structure

When you create a new project, the following structure is generated:

```
my-app/
├── app/
│   ├── controllers/
│   │   └── User.js
│   ├── views/
│   │   └── index.ejs
│   ├── server.js
│   └── migrate.js
├── package.json
└── kime-config.json
```

## License

MIT
