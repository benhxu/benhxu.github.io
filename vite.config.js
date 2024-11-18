import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/benhxu.github.io/",
  plugins: [react()],
  base: "/benhxu.github.io/",
  assetsInclude: ['**/*.glb', '**/*.gltf'],
})
