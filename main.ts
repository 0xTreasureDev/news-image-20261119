// Entry program for the make.fun news image bounty (19 November 2026).
// Runs once under the grader: delivers the finished front-page image
// (entry.png, kept beside this file) to the output folder as entry.png.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const folder = dirname(fileURLToPath(import.meta.url));
const imagePath = join(folder, "entry.png");

if (!existsSync(imagePath)) {
  throw new Error(`no entry.png found in ${folder}`);
}

const outFolder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outFolder, { recursive: true });

const destination = join(outFolder, "entry.png");
copyFileSync(imagePath, destination);

const bytes = statSync(destination).size;
console.log(`entry.png delivered (${bytes} bytes)`);
