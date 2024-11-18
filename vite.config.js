import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/benhxu.github.io/",
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
})
