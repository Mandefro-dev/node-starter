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
        return "Project name may only include lower-case letters,numbers,underscores and hashes.";
      },
    });
  }
  if (!options.language) {
    questions.push({
      type: "list",
      name: "language",
      message: "Which language will u use",
      choices: ["Javascript", "TypeScript"],
      default: defaultTemplate,
    });
  }
  questions.push({
    type: "list",
    name: "pkgManager",
    message: "Which package Manager do u perefer to use?",
    choices: ["npm", "yarn", "pnpm"],
    default: "npm",
  });
  questions.push({
    type: "list",
    name: "architecture",
    message: "What architectural style do u want?",
    choices: [
      { name: "Simple api(all in one folder)", value: "simple" },
      { name: "MVC-standard", value: "mvc" },
      { clean: "Clean", value: "clean" },
    ],
    default: "mvc",
  });
  questions.push({
    type: "list",
    name: "dbType",
    message: "Which database are you gonna use?",
    choices: ["None", "Mongodb", "PostgreSQl", "mySQL"],
    default: "None",
  });
  //TODO:ask if  they picked sql, orm selection
  questions.push({
    type: "list",
    name: "orm",
    message: "Whcih ORM do you want to use?",
    choices: ["Prisma", "Squelize", "TypeORM"],
    default: "Prisma",
    when: (answers) =>
      answers.dbType === "PostgreSQL" || answers.dbType === "mySQL",
  });
  //add authentication layer later
  questions.push({
    type: "confirm",
    name: "auth",
    message: "Do u need authentication?",
    default: false,
  });
  //TODO:this one is kinda advanced ... wil check it later

  questions.push({
    type: "checkbox",
    name: "tools",
    message: "Select additonal tools to configure",
    choices: [
      { name: "Docker(Dockerfile and docker-compose)", vaule: "docker" },
      { name: "Linting & formating(Eslint + prettier)", value: "lint" },
      {
        name: "Unit testing(jest)",
        value: "jest",
      },
      { name: "Validation(joi/zod)", value: "validation" },
    ],
  });
  //init git repo
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
    language: options.language || answers.langauge,
    pkgManager: answers.pkgManager,
    architecture: answers.architecture,
    dbType: answers.dbType,
    orm: answers.orm || (answers.dbType === "MongoDB" ? "mongoose" : null),
    auth: answers.auth,
    tools: answers.tools,
    git: answers.git,
  };
}
