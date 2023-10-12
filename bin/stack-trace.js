#!/usr/bin/env node

'use strict';

const { SourceMapConsumer } = require('source-map');
const fs = require('fs');

const [filePath, line, column] = process.argv.slice(2);

console.log(filePath, line, column);

async function main() {
  const smc = await new SourceMapConsumer(fs.readFileSync(filePath, 'utf8'));
  console.log(smc.originalPositionFor({ line: +line, column: +column }));
}

main();
