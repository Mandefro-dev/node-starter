nodex  
The Node.js Backend Scaffolder
Stop writing boilerplate.
nodex is a CLI tool that generates production-ready Node.js backend architectures in seconds. It doesn't just create files; it builds a "Brain" for your application with best practices, security, and scalability baked in.
Quick StartInstall it globally via npm:Bashnpm install -g nodex-cli
Generate your first project:Bashnodex my-awesome-api
Follow the interactive prompts to choose your stack (MongoDB/Postgres, Docker, Auth, etc.), and watch it build.
Key Features🏗️ Production-Ready ArchitectureForget index.js spaghetti code. nodex generates a clean TypeScript MVC structure:Controllers for HTTP logic.Services for Business logic.Models for Database schemas.Middleware for Error handling & Validation.
➕ The "Add" Command (Sub-Generators)Need a new feature? Don't create 4 files manually.Bashcd my-awesome-api

nodex add product
What happens?✅ Creates src/controllers/product.controller.ts✅ Creates src/services/product.service.ts✅ Creates src/models/product.model.ts✅ Creates src/routes/product.routes.ts✅ Auto-injects the new route into src/routes/index.ts!
📚 Auto-Documentation (Magic)Hate writing Swagger docs? Us too.Bashnodex doc
nodex scans your source code, detects your routes and methods, and automatically generates:Swagger/OpenAPI JSON (docs/swagger.json)Postman Collection (docs/postman_collection.json)🛠️ CommandsCommandDescriptionnodex <name>Scaffolds a new project with interactive setup.nodex add <resource>Generates a Controller, Service, Model, and Route for a resource (e.g., user).nodex docReverse-engineers your code to generate Swagger & Postman files.nodex --helpShows the full list of options.
📂 Project StructureYour generated project will look like this professional standard:Plaintextmy-app/
├── src/
│ ├── config/ # DB & Env setup
│ ├── controllers/ # Request/Response logic
│ ├── middleware/ # Error handlers, Auth checks
│ ├── models/ # Database Schemas
│ ├── routes/ # Route definitions
│ ├── services/ # Business logic
│ ├── utils/ # Logger, Helpers
│ └── app.ts # App entry point
├── tests/ # Jest tests
├── .env.example # Environment variables
├── docker-compose.yml # (Optional) Docker setup
└── package.json
