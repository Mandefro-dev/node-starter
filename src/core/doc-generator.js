import { Project, SyntaxKind } from "ts-morph";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import Converter from "openapi-to-postmanv2";

export async function generateDocs() {
  console.log(chalk.blue("🕵️  Analyzing source code for API routes..."));

  const root = process.cwd();
  const sourcePath = path.join(root, "src");

  const project = new Project({
    tsConfigFilePath: path.join(root, "tsconfig.json"),
    skipAddingFilesFromTsConfig: true,
  });

  // Add source files we want to scan

  project.addSourceFilesAtPaths("src/routes/**/*.ts");

  const routes = [];
  const sourceFiles = project.getSourceFiles();

  for (const sourceFile of sourceFiles) {
    if (sourceFile.getBaseName() === "index.ts") continue;

    console.log(`   Scanning ${chalk.yellow(sourceFile.getBaseName())}...`);

    const resourceName = sourceFile
      .getBaseName()
      .replace(".routes.ts", "")
      .replace(".ts", "");

    const tag = resourceName.charAt(0).toUpperCase() + resourceName.slice(1);

    // Find all 'router.get', 'router.post', etc.
    sourceFile.forEachDescendant((node) => {
      if (node.getKind() === SyntaxKind.CallExpression) {
        const expression = node.getExpression();

        if (expression.getKind() === SyntaxKind.PropertyAccessExpression) {
          const objName = expression.getExpression().getText(); // 'router'
          const method = expression.getName(); // 'get', 'post', 'put', 'delete'

          if (
            objName === "router" &&
            ["get", "post", "put", "delete", "patch"].includes(method)
          ) {
            // Found a route!
            const args = node.getArguments();
            if (args.length > 0) {
              let routePath = args[0].getText().replace(/['"]/g, ""); // remove quotes

              routePath = routePath.replace(/:(\w+)/g, "{$1}");

              routes.push({
                path: `/${resourceName}s${routePath === "/" ? "" : routePath}`, // simplified path logic
                method,
                tag,
                summary: `Auto-generated ${method.toUpperCase()} operation for ${tag}`,
              });
            }
          }
        }
      }
    });
  }

  const swaggerDoc = buildOpenAPISpec(routes);

  await fs.ensureDir(path.join(root, "docs"));
  await fs.writeJSON(path.join(root, "docs", "swagger.json"), swaggerDoc, {
    spaces: 2,
  });

  console.log(chalk.green(`\n Documentation generated at docs/swagger.json`));
  console.log(
    chalk.white(
      "   Run 'npx swagger-ui-watcher docs/swagger.json' to view it.",
    ),
  );

  Converter.convert(
    { type: "json", data: swaggerDoc },
    {},
    (err, conversionResult) => {
      if (!conversionResult.result) {
        console.log("Could not convert to Postman", conversionResult.reason);
      } else {
        const postmanJson = conversionResult.output[0].data;
        fs.writeJSONSync(
          path.join(root, "docs", "postman_collection.json"),
          postmanJson,
          { spaces: 2 },
        );
        console.log(
          chalk.cyan(
            ` Postman Collection generated at docs/postman_collection.json`,
          ),
        );
      }
    },
  );
}

function buildOpenAPISpec(foundRoutes) {
  const paths = {};

  foundRoutes.forEach((route) => {
    if (!paths[route.path]) paths[route.path] = {};

    paths[route.path][route.method] = {
      tags: [route.tag],
      summary: route.summary,
      responses: {
        200: { description: "Success" },
        400: { description: "Bad Request" },
        500: { description: "Server Error" },
      },
      // If path has parameters like {id}, add them automatically
      parameters:
        route.path.match(/{(\w+)}/g)?.map((param) => ({
          name: param.replace(/[{}]/g, ""),
          in: "path",
          required: true,
          schema: { type: "string" },
        })) || [],
    };
  });

  return {
    openapi: "3.0.0",
    info: {
      title: "Nodex Generated API",
      version: "1.0.0",
      description: "Auto-generated documentation by nodex CLI",
    },
    servers: [{ url: "http://localhost:3000/api/v1" }],
    paths: paths,
  };
}
