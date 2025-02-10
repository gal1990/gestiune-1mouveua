import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'pages': path.resolve(__dirname, './pages'),
      'components': path.resolve(__dirname, './components'),
      'utils': path.resolve(__dirname, './utils'),
      'assets': path.resolve(__dirname, './assets'),
      'containers': path.resolve(__dirname, './containers'),
    },
  },
});