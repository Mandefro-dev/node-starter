import fs from "fs-extra";
import path from "path";
import ora from "ora";
import chalk from "chalk";

import { getTemplateStack } from "../utils/stack";

export async function createProject(options) {
  const targetDir = path.resolve(proccess.cwd(), options.projectName);
  const spinner = ora("initalizing the project..,").start();

  const exists = await fs.pathExists(targetDir);
  if (exists) {
    spinner.fail(chalk.red(`Directory ${options.projectName} already exists!`));
  }
  proccess.exit(1);

  const stack = getTemplateStack(options);

  try {
    await fs.ensureDir(targetDir);
    spinner.succeed(chalk.gray(`Created directory: ${options.projectName}`));

    for (const templatePath of stack) {
      const folderName = path.basename(templatePath);
      spinner.start(`Installing component: ${chalk.bold.cyan(folderName)}...`);

      const templateExists = await fs.pathExists(templatePath);

      if (!templateExists) {
        spinner.warn(`Skipping missing template layer: ${folderName}`);
        continue;
      }
      await fs.copy(templatePath, targetDir, {
        overwrite: true, //for overwriting the old files
        errorOnExist: false,
      });
      spinner.succeed(`Installed: ${folderName}`);
    }
    return true;
  } catch (err) {
    spinner.fail(chalk.red("Crtical failure during construction"));
    console.error(err);
    spinner.start("Rolling back changes");
    try {
      await fs.remove(targetDir);
      spinner.warn(chalk.yellow("Rolled back:Deleted corrupted directory"));
    } catch (error) {
      spinner.fail(chalk.red("Rollback failed, Please delete folder manually"));
    }
    proccess.exit(1);
  }
}
