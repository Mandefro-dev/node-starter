# 🚀 nodex

> **The Ultimate Node.js Backend Scaffolder**

![npm version](https://img.shields.io/npm/v/@mandedev/nodex.svg?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6.svg?style=flat-square&logo=typescript&logoColor=white)
![Downloads](https://img.shields.io/npm/dt/@mandedev/nodex.svg?style=flat-square)

**Stop writing boilerplate. Start building features.**  
Generate production-ready, scalable Node.js backends in seconds.

🔗 [Report Bug](https://github.com/mandedev/nodex/issues) · [Request Feature](https://github.com/mandedev/nodex/issues)

---

## ⚡ Why nodex?

Setting up a backend usually means:

- folder structure headaches
- repeated boilerplate
- manual configs
- copy-paste fatigue 😵‍💫

**nodex** automates all of that so you can focus on what actually matters — **features**.

---

## 🛠️ Core Capabilities

- 🏗️ **MVC Architecture**  
  Clean separation of Controllers, Services, Models, and Routes.

- 📘 **TypeScript First**  
  Strict typing, interfaces, and best-practice TS config out of the box.

- ✨ **Resource Generator (`add`)**  
  Generate full CRUD resources in one command.

- 📝 **Auto Documentation**  
  Swagger & Postman docs generated directly from your routes.

- 🔌 **Batteries Included**  
  MongoDB, PostgreSQL, JWT Auth, Docker, Validation — ready to use.

---

## 📦 Installation

### Recommended (no global install)

Run the latest version instantly using `npx`:

```bash
npx @mandedev/nodex <project-name>
Optional: Global Install
If you want the nodex command available everywhere:

npm install -g @mandedev/nodex
🚀 Quick Start
1️⃣ Initialize a Project
npx @mandedev/nodex my-awesome-api
Follow the interactive wizard and choose your preferred stack.

2️⃣ Start Developing
cd my-awesome-api
npm run dev
Your server will start at:

http://localhost:3000
🔥 Hot reloading enabled by default.

🛠️ Magic Commands
➕ Generate Resources
Instead of creating multiple files manually, just run:

nodex add product
This command automatically generates:

src/controllers/product.controller.ts

src/services/product.service.ts

src/models/product.model.ts

src/routes/product.routes.ts

🪄 Auto Injection
The new route is automatically registered in the main router.

📚 Generate API Documentation
Forget writing Swagger YAML files.

nodex doc
Generated files:

docs/swagger.json
docs/postman_collection.json
Ready to use instantly.

📂 Project Structure
my-app/
├── src/
│   ├── config/         # Database & environment configuration
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Auth, validation, error handling
│   ├── models/         # Database schemas
│   ├── routes/         # API route definitions
│   ├── services/       # Business logic
│   ├── utils/          # Helpers & utilities
│   └── app.ts          # Application entry point
├── tests/              # Jest unit & integration tests
├── .env.example        # Environment variable template
├── docker-compose.yml  # Docker configuration
└── package.json
🗺️ Roadmap
 v1.0.0 – MVC scaffolding, TypeScript, MongoDB/Postgres

 v1.1.0 – Resource generator (nodex add)

 v1.2.0 – Frontend type sync (React / Vue)

 v1.3.0 – Cloud deployment scripts (AWS / DigitalOcean)

🤝 Contributing
Contributions are welcome and appreciated ❤️

Fork the repository

Create your feature branch

git checkout -b feature/NewFeature
Commit your changes

git commit -m "Add NewFeature"
Push to your branch

Open a Pull Request 🚀

📄 License
Distributed under the MIT License.
See the LICENSE file for more information.

Built with ❤️ by mandedev
```
