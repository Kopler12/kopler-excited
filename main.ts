// The City Beneath the Shark — an entry for make.fun's ai-excited-01.
//
// The entry itself is the picture in entry.png beside this file: a whale shark the
// size of a city block drifting through a flooded, neon-lit street at dawn, lit pink
// and cyan, with one tiny diver hanging in the glow beneath it. This program's whole
// job is to deliver that picture, byte for byte, to the output directory under the
// name the grader expects — on every run, with nothing else read or written.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const picture = readFileSync(join(here, 'entry.png'));
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
writeFileSync(target, picture);

// Prove the delivery landed whole: the file in the output directory must be the
// picture's exact length, or this run has failed and should say so rather than
// leave a truncated image for the gate to find.
const landed = readFileSync(target);
if (landed.length !== picture.length) {
  throw new Error(`entry.png landed short: ${landed.length} of ${picture.length} bytes`);
}
