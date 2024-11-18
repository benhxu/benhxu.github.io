import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: "/3D Website",
  assetsInclude: ['**/*.glb', '**/*.gltf'],
})