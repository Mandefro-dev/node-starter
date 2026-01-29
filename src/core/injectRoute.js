import path from "path";
import fs from "fs-extra";

export async function injectRoute(naming) {
  const indexPath = path.join(process.cwd(), "src/routes/index.ts");

  let content = await fs.readFile(indexPath, "utf-8");

  const importStatement = `import ${naming.lower}Routes from './${naming.lower}.routes';\n`;
  const useStatement = `router.use('/${naming.lower}s', ${naming.lower}Routes);\n`;

  content = importStatement + content;
  content = content.replace(
    "export default router",
    useStatement + `\n export default router;`,
  );

  await fs.writeFile(indexPath, content);
}
