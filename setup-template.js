#!/usr/bin/env node

/**
 * Setup script for React GitHub Pages Template
 * This script helps configure the template for a new project
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function setup() {
  console.log('🚀 Setting up your React GitHub Pages project...\n');

  // Get project name
  const projectName = await question('Enter your project name (will be used for package.json and GitHub Pages URL): ');

  if (!projectName.trim()) {
    console.log('❌ Project name is required!');
    process.exit(1);
  }

  const sanitizedName = projectName.trim().toLowerCase().replace(/\s+/g, '-');

  try {
    // Update package.json
    const packageJsonPath = path.join(__dirname, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    packageJson.name = sanitizedName;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log('✅ Updated package.json');

    // Update package-lock.json if it exists
    const packageLockPath = path.join(__dirname, 'package-lock.json');
    if (fs.existsSync(packageLockPath)) {
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
      packageLock.name = sanitizedName;
      if (packageLock.packages && packageLock.packages[""]) {
        packageLock.packages[""].name = sanitizedName;
      }
      fs.writeFileSync(packageLockPath, JSON.stringify(packageLock, null, 2) + '\n');
      console.log('✅ Updated package-lock.json');
    }

    // Update README by replacing template placeholders
    const readmePath = path.join(__dirname, 'README.md');
    let readmeContent = fs.readFileSync(readmePath, 'utf8');

    // Replace template placeholders with actual project values and remove template instructions
    const updatedReadme = readmeContent
      .replace(/\{\{PROJECT_NAME\}\}/g, projectName)
      .replace(/\{\{REPO_NAME\}\}/g, sanitizedName)
      .replace(/<!--TEMPLATE_INSTRUCTIONS_START-->[\s\S]*?<!--TEMPLATE_INSTRUCTIONS_END-->\n\n/g, '');

    fs.writeFileSync(readmePath, updatedReadme);
    console.log('✅ Updated README.md');

    // Clean up the setup script
    fs.unlinkSync(__filename);
    console.log('✅ Removed setup script');

    console.log(`\n🎉 Setup complete!`);
    console.log(`\nYour project "${projectName}" is ready!`);
    console.log(`\nNext steps:`);
    console.log(`1. Update the title in index.html if needed`);
    console.log(`2. Start developing: npm run dev`);
    console.log(`3. Push to GitHub and enable Pages in repository settings`);
    console.log(`4. Your app will be available at: https://[your-username].github.io/${sanitizedName}/`);

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

setup();
