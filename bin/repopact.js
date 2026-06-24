#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function copyIfMissing(src, dest, label) {
  if (fs.existsSync(dest)) {
    console.log(`Skipping ${label}: already exists at ${dest}`);
    return;
  }
  ensureDir(dest);
  fs.copyFileSync(src, dest);
  console.log(`Created ${label}: ${dest}`);
}

function writeIfMissing(dest, content, label) {
  if (fs.existsSync(dest)) {
    console.log(`Skipping ${label}: already exists at ${dest}`);
    return;
  }
  ensureDir(dest);
  fs.writeFileSync(dest, content, 'utf8');
  console.log(`Created ${label}: ${dest}`);
}

function init() {
  const cwd = process.cwd();
  const contractSource = path.resolve(__dirname, '..', 'AGENTS.md');

  if (!fs.existsSync(contractSource)) {
    console.error('Error: could not locate packaged AGENTS.md');
    process.exit(1);
  }

  copyIfMissing(contractSource, path.join(cwd, 'AGENTS.md'), 'AGENTS.md');

  writeIfMissing(
    path.join(cwd, 'docs', 'plan', 'specs.md'),
    '# Specifications\n\nThis file is the single source of truth for project requirements.\n',
    'docs/plan/specs.md'
  );

  writeIfMissing(
    path.join(cwd, 'docs', 'plan', 'design.md'),
    '# Design\n\nThis file is the single source of truth for implementation design.\n',
    'docs/plan/design.md'
  );

  writeIfMissing(
    path.join(cwd, 'docs', 'plan', 'tasks.md'),
    '',
    'docs/plan/tasks.md'
  );

  writeIfMissing(
    path.join(cwd, 'docs', 'developers', 'task-logs.md'),
    '# Task Logs\n\nLatest entries first. Keep entries short and factual.\n',
    'docs/developers/task-logs.md'
  );
}

function usage() {
  console.log('Usage: repopact init');
}

const [, , command] = process.argv;

if (command === 'init') {
  init();
} else if (command === '--help' || command === '-h' || !command) {
  usage();
} else {
  console.error(`Unknown command: ${command}`);
  usage();
  process.exit(1);
}
