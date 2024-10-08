import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      api_url: JSON.stringify(env.VITE_API_URL),
      socket_io_url: JSON.stringify(env.VITE_SOCKET_IO_URL)
    },
    plugins: [react()],
    server: {
      port: 3000,
    },
  }
})

