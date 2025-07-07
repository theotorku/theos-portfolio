import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/theos-portfolio/' // use this if you plan to deploy to GitHub Pages
})
