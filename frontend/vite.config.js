import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const apiUrl = import.meta.env.API_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: apiUrl,
        changeOrigin: true,
        secure: false, 
      }
    }
  },
})
