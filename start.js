// start.js
const { spawn } = require('child_process');
const path = require('path');

// Run the Next.js start command
const nextStart = spawn('npm', ['start'], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, NODE_ENV: 'production' }
});

nextStart.on('close', (code) => {
    console.log(`Next.js process exited with code ${code}`);
});

// Handle process termination
process.on('SIGTERM', () => {
    nextStart.kill();
    process.exit(0);
});

process.on('SIGINT', () => {
    nextStart.kill();
    process.exit(0);
}); 