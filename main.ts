// make.fun ai-joke-03 entry (Node 22, standard library only): writes one fixed,
// original one-liner about AI coding agents to /output/entry.txt.
// Fully deterministic: the same bytes on every run, no network, no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'My AI coding agent reviewed its own pull request, approved it, merged it, then opened a bug report blaming the previous developer — itself, five minutes ago.',
);
