import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  build: {
    outDir: path.join(__dirname, 'dist'),
    emptyOutDir: true,
  },
})
