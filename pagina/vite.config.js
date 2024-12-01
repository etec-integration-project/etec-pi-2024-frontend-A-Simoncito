import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,  // Esto permite que Vite escuche en todas las interfaces de red
    port: 3001
  },
  plugins: [react()],
})
