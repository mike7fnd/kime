Kime Framework ⚡

Kime Framework is a lightweight, modular Node.js framework designed for rapid web and desktop app development.
It allows developers to quickly scaffold projects, generate controllers and models, manage views, and run a development server.
Optional integration with Electron lets you build desktop applications from the same codebase.

About the Framework

Dynamic and Modular: Supports controllers, models, views, and custom routes.

Database Support: Works with MongoDB and MySQL.

Rapid Scaffolding: Generate a fully structured project in seconds.

CLI Driven: Simple commands to create controllers, models, projects, and run the server.

Electron Support: Optional desktop application support.

Version Tracking: Check CLI version and update workflow with kime --version and kime update.

Installation

Install the Kime CLI globally so you can run kime anywhere:

npm install -g kime-framework


On macOS/Linux, you may need sudo:

sudo npm install -g kime-framework


Verify the installation:

kime --version


Expected output:

Kime Framework version: 1.3.0

Creating a New Project

Generate a new project with default structure:

kime new MyApp
cd MyApp
npm install


During project creation, you will be prompted to select:

Template type: Default or With CRUD Functions

Database: MongoDB or MySQL

Include Electron: Yes or No

Generated folder structure:

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

CLI Commands Reference
Command	Description
kime --version	Show the installed CLI version
kime new <project>	Create a new project with default folder structure
kime create controller <Name>	Generate a new controller
kime create model <Name>	Generate a new model
kime serve	Start the development server
kime update	Commit and push updates to GitHub
Running the Development Server

Navigate to your project folder:

cd MyApp
kime serve


Opens the app in your browser at:

http://localhost:3000


Generates logs in the terminal for server activity.

Electron Desktop Support (Optional)

If Electron was enabled during project creation:

# Development mode (server + Electron)
npm run kime-dev

# Production build
npm run kime-build


Runs your web project as a desktop app.

Updating Kime Framework

To update the CLI to the latest version:

npm install -g kime-framework


Verify after update:

kime --version


Admins can also push framework updates to GitHub:

kime update


Prompts for a commit message and automates git add, git commit, and git push.

Contributing

Open issues or submit pull requests on GitHub to improve Kime Framework.

Ensure code follows modular conventions and proper folder structure.

License

Kime Framework is licensed under the MIT License.
