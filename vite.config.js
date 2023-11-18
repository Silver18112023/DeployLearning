import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs/promises';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/DeployLearning/",
  esbuild: {
    loader: 'jsx',
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
