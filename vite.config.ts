import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { basename } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: "/air-project",
  plugins: [react(),
    tailwindcss()
  ],

})

