#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

if (process.platform === 'win32') process.exit(0);

const target = path.join(__dirname, '..', 'node_modules', '.bin', 'vite');

try {
  if (fs.existsSync(target)) {
    fs.chmodSync(target, 0o755);
    console.log('Made executable:', target);
  }
} catch (err) {
}
