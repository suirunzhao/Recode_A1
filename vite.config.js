import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Recode_A1/",
  build: { chunkSizeWarningLimit: 1600, },
})
