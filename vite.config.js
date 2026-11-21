import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative, so the build works on GitHub Pages
// under /gymbroo-web/ as well as on any other host.
export default defineConfig({ base: './', plugins: [react()] })
