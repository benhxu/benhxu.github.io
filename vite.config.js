import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/<https://benhxu.github.io/>/',
  
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
})
