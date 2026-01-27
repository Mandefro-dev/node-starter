import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_ROOT = path.resolve(__dirname, "../../templates");

export function getTemplateStack(options) {
  const stack = [];

  const langSuffix = options.language === "TypeScript" ? "ts" : "js";
  const archPrefix = options.architecture;

  stack.push(path.join(TEMPLATE_ROOT, `_base-${archPrefix}-${langSuffix}`));

  if (options.dbType === "PostgreSQL") {
    stack.push(path.join(TEMPLATE_ROOT, "_db-postgres"));
  } else if (options.dbType === "MongoDB") {
    stack.push(path.join(TEMPLATE_ROOT, "_db-mongodb"));
  }

  if (options.auth) {
    stack.push(path.join(TEMPLATE_ROOT, `_auth-jwt-${langSuffix}`));
  }

  if (options.tools && options.tools.includes("docker")) {
    stack.push(path.join(TEMPLATE_ROOT, "_tool-docker"));
  }

  return stack;
}
