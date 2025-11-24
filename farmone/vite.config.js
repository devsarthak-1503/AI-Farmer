import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: "public",   // ⭐ ensures _redirects gets copied
  build: {
    outDir: "dist",      // ⭐ ensures correct output folder
    emptyOutDir: true,
  },
})
