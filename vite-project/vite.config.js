import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  base: './', // Fix assets path for deployment
  build: {
    outDir: 'dist', // Default output folder
  },
  server: {
    historyApiFallback: true, // Fix React Router navigation
  }
})
