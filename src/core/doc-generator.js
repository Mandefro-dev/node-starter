import { Project, SyntaxKind } from "ts-morph";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

export async function generateDocs() {
  console.log(chalk.blue("Analyzing source code for API routes."));

  const root = process.cwd();
  const sourthPath = path.join(root, "src");
  const project = new Project({
    tsConfigFilePath: path.join(root, "tsconfig.json"),
    skipAddingFilesFromTsConfig: true,
  });

  project.addSourceFilesAtPaths("src/routes/**/*.ts");

  const routes = [];
  const sourceFiles = project.getSourceFile();

  for (const sourceFile of sourceFile) {
    if (sourceFile.getBaseName() === "index.ts") continue;
  }
}

export async function buildOpenAPISpec(foundRoutes) {}
