import fs from "fs-extra";
import path from "path";

export async function createEnvFile(targetDir, options) {
  const envPath = path.join(targetDir, ".env");

  //TODO: Use \n  to avoid indentation issues
  let content = `# Environment Variables for ${options.projectName}\nPORT=3000\nNODE_ENV=development\n`;

  if (options.dbType === "MongoDB") {
    content += `DATABASE_URL=mongodb://localhost:27017/${options.projectName}\n`;
  } else if (options.dbType === "PostgreSQL") {
    content += `DATABASE_URL=postgres://user:password@localhost:5432/${options.projectName}\n`;
  } else if (options.dbType === "MySQL") {
    content += `DATABASE_URL=mysql://root:password@localhost:3306/${options.projectName}\n`;
  }

  if (options.auth) {
    content += `JWT_SECRET=${generateRandomSecret()}\n`;
    content += `JWT_EXPIRES_IN=7d\n`;
  }

  await fs.writeFile(envPath, content);
}

function generateRandomSecret() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
