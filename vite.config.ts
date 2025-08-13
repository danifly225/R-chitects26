import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'public',
    emptyOutDir: true,
    rollupOptions: {
      input: './client/index.html'
    }
  },
  server: {
    middlewareMode: true
  }
})