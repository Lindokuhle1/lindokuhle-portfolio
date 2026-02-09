#!/usr/bin/env node

/**
 * Next.js Portfolio Setup Helper
 * This script helps verify and set up your portfolio project
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkNodeInstalled() {
  try {
    const version = execSync('node --version', { encoding: 'utf8' }).trim();
    log(`✓ Node.js installed: ${version}`, 'green');
    return true;
  } catch {
    log('✗ Node.js not found. Please install it from https://nodejs.org/', 'red');
    return false;
  }
}

function checkNpmInstalled() {
  try {
    const version = execSync('npm --version', { encoding: 'utf8' }).trim();
    log(`✓ npm installed: ${version}`, 'green');
    return true;
  } catch {
    log('✗ npm not found', 'red');
    return false;
  }
}

function checkProjectStructure() {
  const requiredFiles = [
    'package.json',
    'tailwind.config.ts',
    'tsconfig.json',
    'src/app/page.tsx',
    'src/data/portfolio.ts',
  ];

  let allFound = true;
  requiredFiles.forEach((file) => {
    const exists = fs.existsSync(file);
    if (exists) {
      log(`✓ Found ${file}`, 'green');
    } else {
      log(`✗ Missing ${file}`, 'red');
      allFound = false;
    }
  });

  return allFound;
}

function main() {
  log('\n═══════════════════════════════════════════════════════════', 'cyan');
  log('   Next.js Portfolio Setup Verification', 'cyan');
  log('═══════════════════════════════════════════════════════════\n', 'cyan');

  log('Checking environment...\n', 'blue');

  const hasNode = checkNodeInstalled();
  const hasNpm = checkNpmInstalled();

  if (!hasNode || !hasNpm) {
    log(
      '\n⚠️  Please install Node.js and npm first:',
      'yellow'
    );
    log('   Visit: https://nodejs.org/ (download LTS version)', 'yellow');
    process.exit(1);
  }

  log('\nChecking project structure...\n', 'blue');
  const hasStructure = checkProjectStructure();

  if (!hasStructure) {
    log('\n⚠️  Some project files are missing!', 'yellow');
    process.exit(1);
  }

  log('\n═══════════════════════════════════════════════════════════', 'cyan');
  log('\n✓ All checks passed! You can now:\n', 'green');
  log('  1. Install dependencies:', 'cyan');
  log('     npm install\n', 'yellow');
  log('  2. Start development server:', 'cyan');
  log('     npm run dev\n', 'yellow');
  log('  3. Open in browser:', 'cyan');
  log('     http://localhost:3000\n', 'yellow');

  log('═══════════════════════════════════════════════════════════\n', 'cyan');
  log('Customization Guide:', 'blue');
  log('  • Edit portfolio data: src/data/portfolio.ts', 'cyan');
  log('  • Update colors: tailwind.config.ts', 'cyan');
  log('  • Change contact info: src/app/contact/page.tsx', 'cyan');
  log('  • Personalize: Read CUSTOMIZATION.md', 'cyan');
  log('\n═══════════════════════════════════════════════════════════\n', 'cyan');
}

main();
