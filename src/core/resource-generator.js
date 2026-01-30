import fs from "fs-extra";
import path from "path";
import ejs from "ejs";
import chalk from "chalk";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateResource(name) {
  const root = process.cwd();
  if (!fs.existsSync(path.join(root, "package.json"))) {
    console.error(
      chalk.red("Error: Run this command inside your project root!"),
    );
  }

  const naming = {
    lower: name.toLowerCase(),
    pascal: name.charAt(0).toUpperCase() + name.slice(1),
  };

  const folders = ["controllers", "services", "models", "routes"];
  console.log(chalk.blue(`\n🏗️  Scaffolding resource: ${naming.pascal}...`));

  for (const folder of folders) {
    const templatePath = path.resolve(
      __dirname,
      `../../templates/_sub-resource/${folder.slice(0, -1)}.ts.ejs`,
    );
    const targetPath = path.join(
      root,
      "src",
      folder,
      `${naming.lower}.${folder.slice(0, -1)}.ts`,
    );
    if (!fs.existsSync(templatePath)) {
      console.warn(chalk.yellow(`Template missing for ${folder}, skipping...`));
    }

    const content = await fs.readFile(templatePath, "utf-8");

    const rendered = ejs.render(content, { name: naming });

    await fs.outputFile(targetPath, rendered);

    console.log(
      chalk.green(`CREATE`) +
        `${folder}/${naming.lower}.${folder.slice(0, -1)}.ts `,
    );
  }
  //TODO:  implment it this later..
  await injectRoute(naming);
}
async function injectRoute(naming) {
  const indexPath = path.join(process.cwd(), "src/routes/index.ts");

  if (!fs.existsSync(indexPath)) {
    console.warn(
      chalk.yellow(
        "\n  src/routes/index.ts not found. Skipping auto-injection.",
      ),
    );
    return;
  }

  let content = await fs.readFile(indexPath, "utf-8");

  // Add import at top, add router.use before export
  const importLine = `import ${naming.lower}Routes from './${naming.lower}.routes';`;
  const useLine = `router.use('/${naming.lower}s', ${naming.lower}Routes);`;

  if (content.includes(importLine)) {
    console.log(chalk.yellow("  SKIP   Route already registered."));
    return;
  }

  // Very simple string injection
  const lines = content.split("\n");
  lines.unshift(importLine);

  const exportIndex = lines.findIndex((line) =>
    line.includes("export default"),
  );
  lines.splice(exportIndex, 0, useLine);

  await fs.writeFile(indexPath, lines.join("\n"));
  console.log(`${chalk.cyan("  UPDATE")} src/routes/index.ts (Route Injected)`);
}
