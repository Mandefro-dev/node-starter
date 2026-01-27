import fs from "fs-extra";
import path from "path";
import ora from "ora";
import chalk from "chalk";
import { getTemplateStack } from "../utils/stack.js";

export async function createProject(options) {
  const targetDir = path.resolve(process.cwd(), options.projectName);
  const spinner = ora("Initializing construction...").start();

  if (fs.existsSync(targetDir)) {
    spinner.fail(chalk.red(`Directory ${options.projectName} already exists!`));
    process.exit(1);
  }

  const stack = getTemplateStack(options);

  try {
    await fs.ensureDir(targetDir);
    spinner.succeed(chalk.gray(`Created directory: ${options.projectName}`));

    for (const templatePath of stack) {
      const folderName = path.basename(templatePath);
      spinner.start(`Installing component: ${chalk.bold.cyan(folderName)}...`);

      if (!fs.existsSync(templatePath)) {
        spinner.warn(`Skipping missing template layer: ${folderName}`);
        continue;
      }

      await fs.copy(templatePath, targetDir, {
        overwrite: true,
        errorOnExist: false,
      });

      spinner.succeed(`Installed: ${folderName}`);
    }

    return true;
  } catch (err) {
    spinner.fail(chalk.red("Critical Failure during construction."));
    console.error(err);

    spinner.start("Rolling back changes...");
    try {
      await fs.remove(targetDir);
      spinner.warn(chalk.yellow("Rolled back: Deleted corrupted directory."));
    } catch (cleanupErr) {
      spinner.fail(
        chalk.red("Rollback failed. Please delete folder manually."),
      );
    }

    process.exit(1);
  }
}
