import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

const getRepoName = () => {
  try {
    const packageJsonPath = resolve(process.cwd(), 'package.json')
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))
    return `/${packageJson.name}/`
  } catch {
    return '/'
  }
}

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx,js,jsx}" --max-warnings 0',
        dev: {
          logLevel: ['error', 'warning'],
        },
      },
      overlay: {
        initialIsOpen: false,
        position: 'tl',
      },
    }),
  ],
  base: process.env.NODE_ENV === 'production' ? getRepoName() : '/',
})
