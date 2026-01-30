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
import { generateResource } from "./core/resource-generator.js";
import { generateDocs } from "./core/doc-generator.js";

export async function cli(args) {
  const program = new Command();

  program
    .name("nodex")
    .version("1.0.0")
    .description("The ultimate node.js scaffolder");

  // This command handles "nodex add <name>"
  program
    .command("add <resource>")
    .description(
      "Generate a new MVC resource (controller, service, model, route)",
    )
    .action(async (resource) => {
      // showWelcomeBanner();
      // Small delay for the banner to show
      await new Promise((r) => setTimeout(r, 300));
      await generateResource(resource);

      process.exit(0);
    });

  program
    .command("doc")
    .description("Auto-generate Swagger documentation from code")
    .action(async () => {
      await generateDocs();
    });
  // --- CREATE PROJECT ---

  program
    .argument("[projectName]", "name of the project")
    .option("-t, --template <type>", "specify language (JavaScript/TypeScript)")
    .action(async (projectName, options) => {
      showWelcomeBanner();
      await new Promise((r) => setTimeout(r, 500));

      let rawOptions = {
        projectName: projectName,
        language: options.template,
      };

      //user need
      const finalOptions = await promptMissingOptions(rawOptions);
      showPlan(finalOptions);

      //  Confirmation
      await inquirer.prompt({
        type: "input",
        name: "confirm",
        message: "Press Enter to confirm or Ctrl+C to cancel.",
      });

      console.log("");
      console.log(chalk.green("🚀 Initializing construction..."));

      // Generation
      const success = await createProject(finalOptions);
      if (!success) return;

      const targetDir = path.resolve(process.cwd(), finalOptions.projectName);

      // Config Phase
      await createEnvFile(targetDir, finalOptions);

      //  npm install & git
      await installDependencies(targetDir, finalOptions.pkgManager);

      if (finalOptions.git) {
        await initGit(targetDir);
      }

      console.log("");
      const rainbow = chalkAnimation.radar(" Project Ready! ");

      setTimeout(async () => {
        rainbow.stop();
        console.log(chalk.cyan(`\nTo get started:`));
        console.log(chalk.white(`  cd ${finalOptions.projectName}`));
        console.log(chalk.white(`  ${finalOptions.pkgManager} run dev`));
        console.log("");

        if (
          finalOptions.tools &&
          (finalOptions.tools.includes("docker") || finalOptions.git)
        ) {
          await openInEditor(targetDir);
        }
      }, 2000);
    });

  program.parse(args);
}
