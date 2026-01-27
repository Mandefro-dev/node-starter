import { Command } from "commander";
import { promptMissingOptions } from "./prompts.js";
import { showWelcomeBanner, showPlan } from "./ui.js";
import inquirer from "inquirer";
import chalk from "chalk";
import { createProject } from "./core/generator.js";
export async function cli(args) {
  showWelcomeBanner();
  await new Promise((r) => setTimeout(r, 500));
  const program = new Command();

  program
    .name("nodex")
    .version("1.0.0")
    .argument("[projectName]", "name of the project")
    .option("-t, --template <type>", "specify langauge (Javascript/TypeScript)")
    .parse(args);

  const options = program.opts();
  const projectNameArgs = program.args[0];

  let rawOptions = {
    projectName: projectNameArgs,
    language: options.template,
  };

  const finalOptions = await promptMissingOptions(rawOptions);
  showPlan(finalOptions);

  await inquirer.prompt({
    type: "input",
    name: "confirm",
    message: "Press Enter to confirm or Ctrl+C to cancel.",
  });
  console.log(chalk.green("Initializing construction..."));
  await createProject(finalOptions);
}
