import figlet from "figlet";
import gradient from "gradient-string";
import chalk from "chalk";

export const showWelcomeBanner = () => {
  console.clear();
  const msg = "NODEX";

  figlet(msg, (err, data) => {
    console.log(chalk.green(data));
    console.log(chalk.green("\n The ultimate node.js scaffolder"));
  });
};

export const showPlan = (options) => {
  console.log(chalk.cyan("_".repeat(50)));
  console.log(chalk.bold.green("PROJECT BLUEPRINT GENERATED."));
  console.log(chalk.cyan("_".repeat(50)));

  const printRow = (key, value) => {
    console.log(
      chalk.white.bold(key.padEnd(15)) + chalk.gray(": ") + chalk.yellow(value),
    );
  };

  printRow("Project Name", options.projectName);
  printRow("Language", options.language);
  printRow("pkg Manager", options.pkgManager);
  printRow("Architecture", options.architecture.toUpperCase());
  printRow("Database", options.dbType);
  if (options.orm) {
    printRow("ORM/ODM", options.orm);
  }
  printRow("Auth System", options.auth ? "yes(JWT)" : "No");
  const toolsString =
    options.tools.length > 0 ? options.tools.join(", ") : "None";
  printRow("Tools", toolsString);
  console.log(chalk.cyan("_".repeat(50)));
  console.log(chalk.green("\n Hit Enter to start construction"));
};
