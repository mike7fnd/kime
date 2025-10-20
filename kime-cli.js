#!/usr/bin/env node
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const args = process.argv.slice(2); // remove 'node' and script name
const command = args[0];

const appPath = path.join(__dirname, 'app');

// -------------------
// Check for version flag
// -------------------
const packageJson = require('./package.json');

if (args.includes('--version') || args.includes('-v')) {
    console.log(`Kime Framework version: ${packageJson.version}`);
    process.exit(0); // exit after printing version
}

// -------------------
// Create a new controller
// -------------------
function createController(name) {
  const controllersDir = path.join(appPath, 'controllers');
  if (!fs.existsSync(controllersDir)) fs.mkdirSync(controllersDir, { recursive: true });

  const content = `module.exports = {
    async index(req, res) {
        res.send('${name} controller works!');
    }
}`;
  const filePath = path.join(controllersDir, `${name}.js`);
  fs.writeFileSync(filePath, content);
  console.log(`Controller "${name}" created at ${filePath}`);
}

// -------------------
// Create a new model
// -------------------
function createModel(name) {
  const modelsDir = path.join(appPath, 'models');
  if (!fs.existsSync(modelsDir)) fs.mkdirSync(modelsDir, { recursive: true });

  const content = `class ${name} {
    constructor() {
        // define model properties here
    }
}

module.exports = ${name};`;
  const filePath = path.join(modelsDir, `${name}.js`);
  fs.writeFileSync(filePath, content);
  console.log(`Model "${name}" created at ${filePath}`);
}

// -------------------
// Copy folder utility
// -------------------
function copyFolder(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFolder(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// -------------------
// Handle commands
// -------------------
switch (command) {

  // -------------------
  // Create controller/model
  // -------------------
  case 'create':
    const type = args[1]; // 'controller' or 'model'
    const name = args[2];
    if (!type || !name) return console.log('Usage: kime create <controller|model> <Name>');

    if (type === 'controller') createController(name);
    else if (type === 'model') createModel(name);
    else console.log('Unknown type. Use "controller" or "model".');
    break;

  // -------------------
  // Serve the app
  // -------------------
  case 'serve':
    const server = spawn('node', ['server.js'], { stdio: 'inherit' });
    break;

  // -------------------
  // Generate a new project
  // -------------------
  case 'new':
    const projectName = args[1] || 'kime-app';
    const projectPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
      console.log(`Project "${projectName}" already exists!`);
      process.exit(1);
    }

    fs.mkdirSync(projectPath);

    inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: 'Template Type:',
        choices: ['Default', 'With CRUD Functions']
      },
      {
        type: 'list',
        name: 'database',
        message: 'Database:',
        choices: ['MongoDB', 'MySQL']
      },
      {
        type: 'confirm',
        name: 'electron',
        message: 'Include Electron for desktop app?',
        default: false
      }
    ]).then(answers => {
      // Copy framework template files into new project
      const templatePath = path.join(__dirname, 'app-template'); // your template folder
      copyFolder(templatePath, path.join(projectPath, 'app'));

      // Save user choices
      fs.writeFileSync(
        path.join(projectPath, 'kime-config.json'),
        JSON.stringify(answers, null, 2)
      );

      console.log(`Project "${projectName}" created!`);
      console.log(`Next steps: cd ${projectName} && npm install`);
    });
    break;

  // -------------------
  // Unknown command
  // -------------------
  default:
    console.log('Unknown command. Available commands: create, serve, new');
    console.log('Global flags: --version, -v');
}
