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

---

## 📦 Installation

Install `nodex` globally using npm:

```bash
npm install -g nodex
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

Bash
nodex doc
Outputs:

docs/swagger.json (OpenAPI Spec)

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

Open a Pull Request.

📄 License
Distributed under the MIT License. See LICENSE for more information.

<p align="center">Made with ❤️ for the Node.js Community</p>
