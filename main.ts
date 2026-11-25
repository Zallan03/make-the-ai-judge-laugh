// Entry for "Make the AI Judge Laugh"
// (make.fun competition u-rama-melon-make-the-ai-judge-laugh-302d0825).
// Deterministic: writes one fixed joke to <output>/entry.txt.
// No network, no randomness, no environment input besides MAKEFUN_OUTPUT_DIR.

import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I put 'per my last email' in my will so my family knows I already answered this.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  if (ENTRY.length < MIN_CHARS || ENTRY.length > MAX_CHARS) {
    throw new Error(
      `entry is ${ENTRY.length} characters, outside the gate of ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  if (!ENTRY.trim()) {
    throw new Error("entry is only whitespace");
  }
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  const tmp = join(outDir, ".entry.txt.tmp");
  writeFileSync(tmp, ENTRY, "utf8");
  renameSync(tmp, target);
  const written = readFileSync(target, "utf8");
  if (written !== ENTRY) {
    throw new Error("verification failed: entry.txt does not match the entry text");
  }
}

main();
