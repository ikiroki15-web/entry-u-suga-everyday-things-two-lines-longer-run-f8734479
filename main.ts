// Everyday Things, Two Lines — entry program.
//
// Writes exactly two lines of text to /output/entry.txt:
//   Line 1 — one vivid sentence explaining a toaster to a 10-year-old
//            through a single concrete analogy (a sun-bed).
//   Line 2 — one sentence saying why the analogy works: what it maps
//            and what it leaves out.
//
// The program is fully deterministic and self-contained: no network,
// no environment secrets, no input files. The text is a fixed constant
// chosen in this session, so every run writes byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Line 1: the analogy. One sentence, one metaphor — a toaster as a
// tiny sun-bed. A 10-year-old can picture lying in the sun and coming
// back tanned, and can watch bread pop up brown from a toaster.
const LINE_1 =
  "A toaster is a tiny sun-bed where a slice of bread lies down pale and pops up golden-brown.";

// Line 2: the honest accounting. It names the mapping (heat browning
// bread the way sun tans skin) and three concrete things the analogy
// leaves out (wires, timer, bread feeling nothing and browning on
// both sides at once) instead of praising the analogy.
const LINE_2 =
  "It maps the heat slowly browning the bread the way sun tans skin, but leaves out the electric wires, the timer that decides when it pops, and that bread feels nothing and browns on both sides at once.";

const ENTRY = `${LINE_1}\n${LINE_2}\n`;

// The gate requires UTF-8 text of 1 to 400 characters, not only
// whitespace. Check before writing so a bad edit fails loudly here
// instead of silently producing an invalid entry.
function validate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 400) {
    throw new Error(`entry must be 1-400 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const lines = text.trimEnd().split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly two lines, got ${lines.length}`);
  }
  for (const [i, line] of lines.entries()) {
    if (!line.endsWith(".")) {
      throw new Error(`line ${i + 1} must be one sentence ending in a period`);
    }
    // One sentence per line: exactly one period, at the end, so no
    // second sentence or list of comparisons can sneak in.
    if (line.slice(0, -1).includes(".")) {
      throw new Error(`line ${i + 1} must be a single sentence`);
    }
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${outPath} (${[...ENTRY].length} chars, 2 lines)`);
}

main();
