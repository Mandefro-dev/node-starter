import fs from "fs-extra";
import path from "path";
import ejs from "ejs";
import chalk from "chalk";
import { injectRoute } from "./injectRoute";

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

  for (const folder of folders) {
    const templatePath = path.join(
      __dirname,
      `../../templates/_sub-resource/${folder.slice(0, -1)}.ts.ejs`,
    );
    const targetPath = path.join(
      root,
      "src",
      folder,
      `${naming.lower}.${folder.slice(0, -1)}.ts`,
    );

    const content = await fs.readFile(templatePath, "utf-8");

    const rendered = ejs.render(content, { name: naming });

    await fs.outputFile(targetPath, rendered);

    console.log(chalk.green(`CREATE`) + `${folder}/${naming.lower}...`);
  }
  //TODO:  implment it this later..
  await injectRoute(naming);
}
