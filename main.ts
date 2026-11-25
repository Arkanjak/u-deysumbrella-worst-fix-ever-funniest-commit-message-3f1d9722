// Worst Fix Ever: Funniest Commit Message
// Writes one original commit message (<= 100 chars) to /output/entry.txt.
// The program reads no files at all, so it behaves identically from any
// working directory: the only path it touches is the harness output path.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: the "fix" amputated the feature it was meant to save —
// the crash is gone because nobody can log in anymore.
const ENTRY = "fix: fixed the login crash by deleting the login button";

function main(): void {
  const text = ENTRY.trim();
  if (text.length === 0 || text.length > 100) {
    throw new Error(`entry must be 1-100 characters, got ${text.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote ${text.length} chars to /output/entry.txt`);
}

main();
