// The Houseplant Out-of-Office.
//
// Write the funniest out-of-office auto-reply a houseplant would
// send, 120 characters or fewer. The line is the whole entry. This
// program writes that line to entry.txt and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const reply =
  "Out of office. I am a cactus, unwatered since March. Your email will be ignored until someone apologizes in person.";

// The gate: one line, 1 to 120 characters, no surrounding whitespace,
// no embedded newline. Anything else never reaches the judge.
const size = [...reply].length;
if (size < 1 || size > 120) {
  throw new Error(`reply must be 1 to 120 characters, got ${size}`);
}
if (reply.trim() !== reply || reply.includes("\n")) {
  throw new Error("reply must be a single line with no surrounding whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), reply, "utf8");
