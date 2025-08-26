# React + TypeScript + Vite GitHub Pages Template

A modern, production-ready template for React applications with automatic GitHub Pages deployment.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 22+ recommended - required by Vite 7+)
- npm

### Using this Template

1. **Click "Use this template"** button on GitHub to create a new repository
2. **Clone your new repository**:
   ```bash
   git clone https://github.com/[your-username]/[your-repo-name].git
   cd [your-repo-name]
   ```

3. **Run the setup script**:
   ```bash
   npm install
   node setup-template.js
   ```
   This will configure the project name and update all necessary files.

4. **Start developing**:
   ```bash
   npm run dev
   ```

### Manual Setup (Alternative)

If you prefer to set up manually:

1. Update the `name` field in `package.json` to match your repository name
2. The `vite.config.ts` will automatically use this name for the GitHub Pages base path
3. Update the title in `index.html` if desired

## 📦 Deployment to GitHub Pages

This template includes automatic deployment via GitHub Actions:

1. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Select "GitHub Actions" as the source

2. **Push to main branch** - deployment happens automatically!

3. **Your app will be live at**: `https://[your-username].github.io/[repository-name]/`

## ✨ Features

- **⚡ Vite** - Lightning fast build tool and dev server
- **⚛️ React 19** - Latest React with TypeScript support
- **🚀 GitHub Pages Ready** - Pre-configured deployment workflow
- **🛣️ SPA Routing Support** - 404.html for client-side routing
- **🔧 Auto Configuration** - Base path automatically set from package.json
- **📱 Modern Setup** - ESLint, TypeScript, and modern tooling
- **🎨 Clean Structure** - Well-organized project structure

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run deploy` - Build the project (used by GitHub Actions)

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Pages deployment workflow
├── public/
│   ├── 404.html          # SPA routing support for GitHub Pages
│   └── vite.svg
├── src/
│   ├── assets/           # Static assets
│   ├── App.tsx          # Main App component
│   ├── App.css          # App styles
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration (auto-configured for GitHub Pages)
├── package.json         # Dependencies and scripts
└── setup-template.js    # One-time setup script
```

## 🔧 Configuration Details

### Vite Configuration
The `vite.config.ts` automatically configures the base path for GitHub Pages:
- **Development**: Uses `/` for local development
- **Production**: Uses `/[package-name]/` for GitHub Pages deployment

### GitHub Actions Workflow
The deployment workflow:
- Triggers on pushes to `main` branch
- Uses Node.js 18 with npm caching
- Builds and deploys to GitHub Pages automatically
- Includes proper permissions for Pages deployment

### SPA Routing Support
The `public/404.html` file enables client-side routing by serving the React app for all routes, making React Router work seamlessly on GitHub Pages.

## 🎨 Customization

### Styling
- Modify `src/App.css` and `src/index.css` for styling
- The template uses vanilla CSS, but you can easily add:
  - Tailwind CSS
  - Styled Components
  - Material-UI
  - Or any other styling solution

### Adding Dependencies
```bash
npm install [package-name]
```

### Environment Variables
Create `.env` files for environment-specific configuration:
```bash
# .env.local
VITE_API_URL=https://api.example.com
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have any questions or run into issues:

1. Check the [GitHub Issues](../../issues) for existing solutions
2. Create a new issue if you need help
3. Check the [Vite documentation](https://vitejs.dev/) for build-related questions
4. Check the [GitHub Pages documentation](https://docs.github.com/en/pages) for deployment issues

---

**Happy coding!** 🎉