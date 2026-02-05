<<<<<<< HEAD
Markdown

# 🚀 nodex

> **The Ultimate Node.js Backend Scaffolder**

<div align="center">

[![npm version](https://img.shields.io/npm/v/@mandedev/nodex.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/@mandedev/nodex)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6.svg?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Downloads](https://img.shields.io/npm/dt/@mandedev/nodex.svg?style=flat-square)](https://www.npmjs.com/package/@mandedev/nodex)

**Stop writing boilerplate. Start building features.**
Generate production-ready, scalable Node.js architectures in seconds.

[Report Bug](https://github.com/mandedev/nodex/issues) · [Request Feature](https://github.com/mandedev/nodex/issues)

</div>

---

## ⚡ Why nodex?

Setting up a robust backend takes hours. **nodex** does it in seconds by automating the tedious parts of project initialization.

### 🛠️ Core Capabilities

- **🏗️ MVC Architecture**: Professional structure with Controllers, Services, and Models.
- **📘 TypeScript First**: Strict typing, interfaces, and TSConfig best practices built-in.
- **✨ The "Add" Command**: Generate full CRUD resources (Controller+Service+Route) instantly.
- **📝 Auto-Documentation**: Auto-generates Swagger & Postman docs by reading your code.
- **🔌 Batteries Included**: MongoDB, PostgreSQL, JWT Auth, Docker, and Validation ready.
=======
#  nodex
> **The Ultimate Node.js Backend Scaffolder**

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6.svg?style=flat-square&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)

**Stop writing boilerplate.** `nodex` is a powerful CLI tool designed to generate production-ready Node.js backend architectures in seconds. It goes beyond simple file generation—it acts as your "Assistant Architect," helping you scaffold projects, generate resources, and automate documentation.

---

## ✨ Features

- **🏗️ Professional Architecture**: Instantly sets up a **TypeScript MVC** structure (Controllers, Services, Models).
- **🔌 Batteries Included**: Configurable support for **MongoDB** or **PostgreSQL**, **Docker**, and **JWT Auth**.
- **🚀 The "Add" Command**: Generate new resources (Controller + Service + Route + Model) with a single command.
- **📚 Auto-Documentation**: Reverse-engineer your code to generate **Swagger** and **Postman** files automatically via `nodex doc`.
- **⚙️ Zero Config**: Handles `npm install`, `git init`, and `.env` creation for you.
>>>>>>> 485f66d53a2c968bb22858482b76b75b53fe34b7

---

## 📦 Installation

<<<<<<< HEAD
**Recommended:** Use `npx` to run the latest version without installing permanently:

```bash
npx @mandedev/nodex <project-name>
Global Install: To have the nodex command available everywhere:

Bash
npm install -g @mandedev/nodex
🚀 Quick Start
1. Initialize a Project
Run the command and follow the interactive wizard to choose your stack.

Bash
npx @mandedev/nodex my-awesome-api
2. Start Developing
Bash
cd my-awesome-api
npm run dev
Your server will start on http://localhost:3000 with Hot-Reloading enabled!

🛠️ The "Magic" Commands
➕ Generate Resources
Stop creating 4 different files for every new feature. Just run:

Bash
nodex add product
This automatically handles:

✅ src/controllers/product.controller.ts creation.

✅ src/services/product.service.ts creation.

✅ src/models/product.model.ts creation.

✅ src/routes/product.routes.ts creation.

🪄 Auto-Injection: The new route is automatically registered in your main router.

📚 Auto-Generate Docs
Forget writing manual Swagger YAML files. nodex reverse-engineers your routes to create docs.
=======
Install `nodex` globally using npm:

```bash
npm install -g @mandedev/nodex
Note: Ensure you have Node.js v14+ installed)

⚡ Quick Start
1. Create a New Project
Run the command and follow the interactive wizard to choose your database and tools.

Bash
nodex my-awesome-api
2. Start Development
Bash
cd my-awesome-api
npm run dev
🛠️ Advanced Usage
➕ The add Command (Sub-Generators)
Stop creating files manually. When you need a new feature (e.g., a "Product" module), just run:

Bash
nodex add product
What happens automatically?

✅ Creates src/controllers/product.controller.ts

✅ Creates src/services/product.service.ts

✅ Creates src/models/product.model.ts

✅ Creates src/routes/product.routes.ts

🪄 Injects the new route into src/routes/index.ts so it works instantly.

📝 The doc Command (Auto-Docs)
Don't waste time writing YAML for Swagger. nodex analyzes your route definitions and generates the docs for you.
>>>>>>> 485f66d53a2c968bb22858482b76b75b53fe34b7

Bash
nodex doc
Outputs:

docs/swagger.json (OpenAPI Spec)

<<<<<<< HEAD
docs/postman_collection.json (Ready for import)

📂 Project Structure
Your generated project follows a clean, industry-standard organization:

Plaintext
my-app/
├── src/
│   ├── config/         # Database & Env configurations
│   ├── controllers/    # Request handlers (Input/Output)
│   ├── middleware/     # Auth, Validation, Error Handling
│   ├── models/         # Database Schemas (Mongoose/Sequelize)
│   ├── routes/         # API Route definitions
│   ├── services/       # Business Logic & DB calls
│   ├── utils/          # Helpers (Logger, Response wrappers)
│   └── app.ts          # App Entry Point
├── tests/              # Jest Unit & Integration Tests
├── .env.example        # Environment Template
├── docker-compose.yml  # Docker Setup
└── package.json
🗺️ Roadmap
[x] v1.0.0: MVC Scaffolding, TypeScript, MongoDB/Postgres support.

[x] v1.1.0: Resource Generators (nodex add).

[ ] v1.2.0: Frontend Type Sync (Generate React/Vue types from Backend).

[ ] v1.3.0: Cloud Deployment Scripts (AWS/DigitalOcean).

🤝 Contributing
We welcome contributions!

Fork the repo.

Create your feature branch (git checkout -b feature/NewFeature).

Commit your changes (git commit -m 'Add NewFeature').

Push to the branch (git push origin feature/NewFeature).
=======
docs/postman_collection.json (Ready to import into Postman)

📂 Generated Structure
Your project is organized for scalability from Day 1:

Plaintext
my-project/
├── src/
│   ├── config/         # Database & Env connections
│   ├── controllers/    # Handles HTTP requests
│   ├── middleware/     # Error handling, Auth, Validation
│   ├── models/         # Database schemas (Mongoose/Sequelize)
│   ├── routes/         # API route definitions
│   ├── services/       # Business logic (DB abstraction)
│   ├── utils/          # Logger, Helpers
│   └── app.ts          # Express App setup
├── docs/               # Auto-generated Swagger/Postman files
├── tests/              # Jest setup
├── .env.example        # Environment variables template
├── docker-compose.yml  # Container setup
└── package.json
🗺️ Roadmap
We are constantly evolving nodex to be the standard for Node.js development.

[x] v1.0.0: MVC Scaffolding, TypeScript support, DB Generators.

[ ] v1.1.0: nodex sync (Generate Frontend Types from Backend Models).

[ ] v1.2.0: Cloud Deployment Scripts (AWS/DigitalOcean).

[ ] v1.3.0: nodex check (Local environment health monitor).

🤝 Contributing
We love contributions! If you have an idea for a template or a feature:

Fork the repo.

Create your feature branch (git checkout -b feature/amazing-feature).

Commit your changes.

Push to the branch.
>>>>>>> 485f66d53a2c968bb22858482b76b75b53fe34b7

Open a Pull Request.

📄 License
Distributed under the MIT License. See LICENSE for more information.

<<<<<<< HEAD
<div align="center"> <sub>Built with ❤️ by <a href="https://www.google.com/search?q=https://github.com/mandedev">mandedev</a></sub> </div>
```
=======
<p align="center">Made with ❤️ for the Node.js Community</p>
>>>>>>> 485f66d53a2c968bb22858482b76b75b53fe34b7
