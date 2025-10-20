

# Kime Framework


> Lightweight Node.js Framework for Rapid Web & Desktop Development developed by Mike Fernandez.

## Overview

**Kime Framework** is a lightweight, modular Node.js framework for rapid web and desktop app development. It allows you to scaffold projects, generate controllers/models, manage views, and run a local server. Optional **Electron support** enables desktop applications using the same codebase.

## About

- **Dynamic & Modular**: Controllers, models, views, and custom routes
- **Database Support**: MongoDB, MySQL
- **Rapid Scaffolding**: Generate projects in seconds
- **CLI Driven**: Commands for creation, generation, and development
- **Version & Updates**: Check version with `kime --version`, update with `kime update`

## Installation

Install Kime CLI globally:

```bash
npm install -g kime-framework
```

For macOS/Linux, if permission errors occur:

```bash
sudo npm install -g kime-framework
```

Verify installation:

```bash
kime --version
```

## Creating a Project

Scaffold a new project:

```bash
kime new WebApp
```
new project:
```bash
cd WebApp
```

Install depedencies
```bash
npm install
```



### Project Structure

```
MyApp/
├── kime/
│   ├── index.js
│   ├── router.js
│   └── template.js
├── app/
│   ├── controllers/
│   ├── models/
│   └── views/
├── server.js
├── package.json
```

## CLI Commands

```bash
kime --version              # Show CLI version
kime new <project>         # Create new project
kime create controller <Name>  # Generate controller
kime create model <Name>   # Generate model
kime serve                 # Start dev server
kime update                # Commit & push to GitHub
```

## Running the Server

Start the development server:

```bash
cd MyApp
kime serve
```

Access at:

```plaintext
http://localhost:3000
```

View real-time logs in the terminal.

## Electron Support

If Electron is enabled:

```bash
# Dev mode (server + Electron)
npm run kime-dev

# Production build
npm run kime-build
```

Launches your web app as a desktop application.

## Updating Kime

Update the CLI:

```bash
npm install -g kime-framework
```

Verify:

```bash
kime --version
```

Push framework updates (admin):

```bash
kime update
```

Prompts for commit message and runs `git add`, `git commit`, `git push`.

## Contributing

Join us on [GitHub](https://github.com/kime-framework):

- Open issues or submit PRs
- Follow modular folder structure
- Add comments/docs for new features
