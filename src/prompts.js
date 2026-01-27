import inquirer from "inquirer";

export async function promptMissingOptions(options) {
  const defaultTemplate = "TypeScript";
  const questions = [];

  if (!options.projectName) {
    questions.push({
      type: "input",
      name: "projectName",
      message: "What is the name of your project?",
      default: "my-app",
      validate: (input) => {
        if (/^([a-z\-\_\d])+$/.test(input)) return true;
        return "Project name may only include lower-case letters, numbers, underscores and hashes.";
      },
    });
  }

  if (!options.language) {
    questions.push({
      type: "list",
      name: "language",
      message: "Which language will you use?",
      choices: ["JavaScript", "TypeScript"],
      default: defaultTemplate,
    });
  }

  questions.push({
    type: "list",
    name: "pkgManager",
    message: "Which package manager do you prefer?",
    choices: ["npm", "yarn", "pnpm"],
    default: "npm",
  });

  questions.push({
    type: "list",
    name: "architecture",
    message: "What architectural style do you want?",
    choices: [
      { name: "Simple API (all in one folder)", value: "simple" },
      { name: "MVC Standard", value: "mvc" },
      { name: "Clean Architecture", value: "clean" },
    ],
    default: "mvc",
  });

  questions.push({
    type: "list",
    name: "dbType",
    message: "Which database are you going to use?",
    choices: ["None", "MongoDB", "PostgreSQL", "MySQL"],
    default: "None",
  });

  questions.push({
    type: "list",
    name: "orm",
    message: "Which ORM do you want to use?",
    choices: ["Prisma", "Sequelize", "TypeORM"],
    default: "Prisma",
    when: (answers) =>
      answers.dbType === "PostgreSQL" || answers.dbType === "MySQL",
  });

  questions.push({
    type: "confirm",
    name: "auth",
    message: "Do you need authentication?",
    default: false,
  });

  questions.push({
    type: "checkbox",
    name: "tools",
    message: "Select additional tools to configure",
    choices: [
      { name: "Docker (Dockerfile)", value: "docker" },
      { name: "Linting & Formatting", value: "lint" },
      { name: "Unit Testing (Jest)", value: "jest" },
      { name: "Validation (Joi/Zod)", value: "validation" },
    ],
  });

  questions.push({
    type: "confirm",
    name: "git",
    message: "Initialize git repo?",
    default: true,
  });

  const answers = await inquirer.prompt(questions);

  return {
    ...options,
    projectName: options.projectName || answers.projectName,
    language: options.language || answers.language,
    pkgManager: answers.pkgManager,
    architecture: answers.architecture,
    dbType: answers.dbType,
    orm: answers.orm || (answers.dbType === "MongoDB" ? "mongoose" : null),
    auth: answers.auth,
    tools: answers.tools || [],
    git: answers.git,
  };
}
