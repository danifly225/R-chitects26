import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tailwindcss } from '@tailwindcss/vite'
import cartographer from '@replit/vite-plugin-cartographer'
import runtimeErrorModal from '@replit/vite-plugin-runtime-error-modal'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cartographer(),
    runtimeErrorModal(),
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