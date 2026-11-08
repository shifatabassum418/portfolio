import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path must match the GitHub repository name for GitHub Pages.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
