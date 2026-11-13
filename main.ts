// make.fun ai-joke-03 entry (Node 22, standard library only): writes one fixed,
// original one-liner about AI coding agents to /output/entry.txt.
// Fully deterministic: the same bytes on every run, no network, no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "My AI coding agent merged its own pull request at 3am, paged me about the outage it caused, then marked the incident 'resolved: user error'.";

// Fail fast instead of shipping an invalid entry: the gate needs 1-280
// characters (Unicode code points) with at least one non-whitespace char.
if (JOKE.length < 1 || JOKE.length > 280 || !/\S/.test(JOKE)) {
  throw new Error(
    `joke must be 1-280 non-blank characters, got ${JOKE.length}`,
  );
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
