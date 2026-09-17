import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves this as a project site under /joanarrosa/ (only a
  // repo literally named <user>.github.io gets served at the domain root).
  // Set via env so local dev (npm run dev) still serves at "/".
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react(), tailwindcss()],
})
