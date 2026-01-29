import { execa } from "execa";
import ora from "ora";
import chalk from "chalk";

export async function installDependencies(targetDir, pkgManager) {
  const spinner = ora(
    `Installing dependencies via ${pkgManager}... (This may take a moment)`,
  ).start();

  try {
    await execa(pkgManager, ["install"], { cwd: targetDir });
    spinner.succeed(chalk.green("Dependencies installed successfully!"));
  } catch (error) {
    spinner.fail(chalk.red("Dependency installation failed."));
  }
}

export async function initGit(targetDir) {
  const spinner = ora("Initializing Git repository...").start();

  try {
    await execa("git", ["init"], { cwd: targetDir });
    await execa("git", ["add", "."], { cwd: targetDir });
    await execa("git", ["commit", "-m", "Initial commit by nodex"], {
      cwd: targetDir,
    });
    spinner.succeed(chalk.green("Git initialized and initial commit created."));
  } catch (error) {
    spinner.warn(
      chalk.yellow(
        "Git initialization failed (maybe git is not installed?). Skipping.",
      ),
    );
  }
}

export async function openInEditor(targetDir) {
  try {
    await execa("code", ["."], { cwd: targetDir });
  } catch (error) {
    //fail in silent
  }
}
