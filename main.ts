import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the folder that holds this program so the bundled
// artwork can be located no matter where Node was launched from.
const here = dirname(fileURLToPath(import.meta.url));
const sourceFile = join(here, "entry.png");

// The grader may point MAKEFUN_OUTPUT_DIR at a scratch folder;
// fall back to the conventional /output mount when it is absent.
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetFile = join(targetDir, "entry.png");

// Make sure the destination exists before copying — a fresh
// sandbox does not guarantee the output folder is already there.
mkdirSync(targetDir, { recursive: true });

copyFileSync(sourceFile, targetFile);

// Guard against a truncated copy: the landed file must match
// the source length exactly, otherwise fail loudly.
const expected = statSync(sourceFile).size;
const landed = statSync(targetFile).size;
if (landed !== expected) {
  throw new Error(`copy incomplete: expected ${expected} bytes, got ${landed}`);
}
