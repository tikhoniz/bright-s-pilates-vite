import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.join(__dirname, 'dist'),
    emptyOutDir: true,
  },
})
