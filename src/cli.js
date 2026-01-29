import { Command } from "commander";
import { promptMissingOptions } from "./prompts.js";
import { showWelcomeBanner, showPlan } from "./ui.js";
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import path from "path";
import { createProject } from "./core/generator.js";
import { createEnvFile } from "./utils/env.js";
import { installDependencies, initGit, openInEditor } from "./core/tasks.js";
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
  console.log("");
  console.log(chalk.green("Initializing construction..."));
  const success = await createProject(finalOptions);
  if (!success) return;

  const targetDir = path.resolve(process.cwd(), finalOptions.projectName);
  await createEnvFile(targetDir, finalOptions);

  await installDependencies(targetDir, finalOptions.pkgManager);

  if (finalOptions.git) {
    await initGit(targetDir);
  }

  console.log("");
  const rainbow = chalk.cyan("Project Ready!");

  setTimeout(async () => {
    console.log(chalk.cyan(`\nTo get started:`));
    console.log(chalk.white(`  cd ${finalOptions.projectName}`));
    console.log(chalk.white(`  ${finalOptions.pkgManager} run dev`));
    console.log("");

    if (finalOptions.tools.includes("docker") || finalOptions.git) {
      await openInEditor(targetDir);
    }
  }, 2000);
}
