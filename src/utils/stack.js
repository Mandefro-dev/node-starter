import path from "path";
import { fileUrltoPath } from "url";

const __filename = fileUrltoPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_ROOT = path.resolve(__dirname, "..", "..", "templates");

export function getTemplateStack(options) {
  const stack = [];
  const langSuffix = options.language === "TypeScript" ? "ts" : "js";
  const archPrefix = options.architecture === "simple" ? "simple" : "mvc";
  //arch
  stack.push(path.join(TEMPLATE_ROOT, `_base-${archPrefix}-${langSuffix}`));
  //database
  if (options.dbType === "PostgreSQL") {
    stack.push(path.join(TEMPLATE_ROOT, "_db-postgres"));
  } else if (options.dbType === "MongoDB") {
    stack.push(path.join(TEMPLATE_ROOT, "_db-mongodb"));
  }
  //auth

  if (options.auth) {
    stack.push(path.join(TEMPLATE_ROOT, `_auth-jwt-${langSuffix}`));
  }

  //tools

  if (options.tools.includes("docker")) {
    stack.push(path.join(TEMPLATE_ROOT, "_tool-docker"));
  }

  //more tools later

  return stack;
}
