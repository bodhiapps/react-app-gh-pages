import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Get repository name from package.json for GitHub Pages base path
const getRepoName = () => {
  try {
    const packageJsonPath = resolve(process.cwd(), 'package.json')
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))
    return `/${packageJson.name}/`
  } catch {
    // Fallback if package.json can't be read
    return '/'
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? getRepoName() : '/',
})
