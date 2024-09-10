import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const api_url = process.env.API_URL

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: api_url,
        changeOrigin: true,
      }
    }
  },
 
})
