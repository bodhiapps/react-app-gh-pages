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

    // Update README
    const readmePath = path.join(__dirname, 'README.md');
    let readmeContent = fs.readFileSync(readmePath, 'utf8');

    // Replace the template README with project-specific content
    const newReadmeContent = `# ${projectName}

A React + TypeScript + Vite application deployed to GitHub Pages.

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm

### Installation

1. Clone this repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## 📦 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Push your code to the \`main\` branch
2. Go to your repository Settings → Pages
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy your app

Your app will be available at: \`https://[your-username].github.io/${sanitizedName}/\`

## 🛠️ Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build locally
- \`npm run lint\` - Run ESLint
- \`npm run deploy\` - Build the project

## 🏗️ Built With

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite](https://vitejs.dev/) - Build Tool
- [GitHub Pages](https://pages.github.com/) - Hosting

## 📁 Project Structure

\`\`\`
${sanitizedName}/
├── public/
│   ├── 404.html          # SPA routing support
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Pages deployment
├── index.html
├── vite.config.ts         # Vite configuration
└── package.json
\`\`\`

## 🔧 Configuration

The project is pre-configured for GitHub Pages deployment:

- **Vite Config**: Automatically sets the correct base path from package.json name
- **GitHub Actions**: Deploys on every push to main branch
- **SPA Routing**: 404.html enables client-side routing
- **Asset Optimization**: Vite handles bundling and optimization

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request
`;

    fs.writeFileSync(readmePath, newReadmeContent);
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
