import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tailwindcss } from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  const isReplit = process.env.REPLIT === '1' || process.env.REPL_ID
  
  const plugins = [
    react(),
    tailwindcss(),
  ]

  // Ajouter les plugins Replit seulement en développement ET sur Replit
  if (isDev && isReplit) {
    try {
      const { default: cartographer } = await import('@replit/vite-plugin-cartographer')
      const { default: runtimeErrorModal } = await import('@replit/vite-plugin-runtime-error-modal')
      
      plugins.push(
        cartographer(),
        runtimeErrorModal()
      )
    } catch (error) {
      console.warn('Plugins Replit non disponibles, continuons sans eux')
    }
  }

  return {
    plugins,
    optimizeDeps: {
      exclude: ['@replit/vite-plugin-cartographer', '@replit/vite-plugin-runtime-error-modal']
    },
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
  }
})