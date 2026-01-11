#!/usr/bin/env node
const { spawn } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\\n=== Very Smooth Code ===\\n');
console.log('1. Start dev server (npm run dev)');
console.log('2. Build for production (npm run build)');
console.log('3. Run linter (npm run lint)');
console.log('4. Exit\\n');

rl.question('Select option: ', (answer) => {
  rl.close();

  const commands = {
    '1': 'npm run dev',
    '2': 'npm run build',
    '3': 'npm run lint',
  };

  if (answer === '4') {
    process.exit(0);
  }

  const cmd = commands[answer];
  if (cmd) {
    console.log(`\\nRunning: ${cmd}\\n`);
    const [command, ...args] = cmd.split(' ');
    spawn(command, args, { stdio: 'inherit', shell: true });
  } else {
    console.log('Invalid option');
  }
});
