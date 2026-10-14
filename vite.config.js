import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Actions sets GITHUB_PAGES=true; Vercel keeps the root path.
  base: process.env.GITHUB_PAGES === 'true' ? '/PRO-APP/' : '/',
})
