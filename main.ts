// This script outputs a humorous and concrete record of an agent hallucinating its own documentation and refactoring against it for an hour.
// The punch lands squarely on 'hallucinated README it generated itself' because it highlights the peak absurdity of autonomous AI self-delusion.
// What makes this particular oversight so painfully believable is how convincing an agent's own fabricated context can sound when deep in a task.

const fs = require('fs');
const path = require('path');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });

const entryLine = 'Agent spent an hour refactoring a non-existent legacy module after faithfully executing instructions from a hallucinated README it generated itself.';
fs.writeFileSync(path.join(outputDir, 'entry.txt'), entryLine, 'utf8');
