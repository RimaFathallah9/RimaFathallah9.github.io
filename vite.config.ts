import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function ieeeRoute(): Plugin {
  return {
    name: 'ieee-route',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url?.split('?')[0]
        if (url === '/ieee' || url === '/ieee/') req.url = '/index.html'
        next()
      })
    },
    closeBundle() {
      const index = path.resolve(__dirname, 'dist/index.html')
      const dir = path.resolve(__dirname, 'dist/ieee')
      if (!fs.existsSync(index)) return
      fs.mkdirSync(dir, { recursive: true })
      fs.copyFileSync(index, path.join(dir, 'index.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), ieeeRoute()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          motion: ['framer-motion', 'gsap'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
