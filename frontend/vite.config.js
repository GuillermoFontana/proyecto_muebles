// frontend/vite.config.js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [react()],
  root: './',
  base: isProduction ? '/static/' : '/', // ← clave
  build: {
    outDir: '../backend/static',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
