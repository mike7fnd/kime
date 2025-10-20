# ⚡ Kime Framework

![Kime Logo](./logo.png) <!-- Optional logo -->

**Kime Framework** is a lightweight, modular Node.js framework for rapid web and desktop app development.  
It allows you to scaffold projects, generate controllers/models, manage views, and run a local server.  
Optional **Electron support** enables desktop applications using the same codebase.

---

## 📝 About the Framework

- **Dynamic & Modular:** Controllers, models, views, and custom routes  
- **Database Support:** MongoDB & MySQL  
- **Rapid Scaffolding:** Generate fully structured projects in seconds  
- **CLI Driven:** Simple commands for project creation, file generation, and development  
- **Electron Support:** Optional desktop app integration  
- **Version & Update:** Check CLI version with `kime --version` and update with `kime update`  

---

## ⚙ Installation

Install Kime CLI globally:

```bash
npm install -g kime-framework
macOS/Linux may require sudo:

bash
Copy code
sudo npm install -g kime-framework
Verify installation:

bash
Copy code
kime --version
Expected output:

yaml
Copy code
Kime Framework version: 1.3.0
🚀 Creating a New Project
bash
Copy code
kime new MyApp
cd MyApp
npm install
During project creation, select:

Template Type: Default / With CRUD Functions

Database: MongoDB / MySQL

Include Electron: Yes / No

Project Structure
pgsql
Copy code
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
🛠 CLI Commands
Command	Description
kime --version	Show CLI version
kime new <project>	Create a new project with full structure
kime create controller <Name>	Generate a controller
kime create model <Name>	Generate a model
kime serve	Start the development server
kime update	Commit & push updates to GitHub

💻 Running the Development Server
bash
Copy code
cd MyApp
kime serve
Access your app in the browser:

arduino
Copy code
http://localhost:3000
Terminal shows server logs in real time.

🖥 Electron Desktop Support (Optional)
If Electron was enabled:

bash
Copy code
# Development mode (server + Electron)
npm run kime-dev

# Production build
npm run kime-build
Runs your web project as a desktop application.

⬆ Updating Kime CLI
bash
Copy code
npm install -g kime-framework
Verify:

bash
Copy code
kime --version
Admin can also push framework updates to GitHub:

bash
Copy code
kime update
Prompts for a commit message and automates git add, git commit, git push.

🤝 Contributing
Open issues or submit pull requests on GitHub

Follow modular conventions and folder structure

Add comments and documentation for any new features

