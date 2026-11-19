import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable in production for smaller bundles
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          helmet: ['react-helmet-async'],
          emailjs: ['@emailjs/browser']
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize assets
    assetsInlineLimit: 4096 // 4kb - inline small assets
  },
  server: {
    port: 3000,
    host: true
  },
  optimizeDeps: {
    exclude: ['@rollup/rollup-linux-x64-gnu'],
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
  },
  base: '/' // Using root path for custom domain anachroni.co
}) 