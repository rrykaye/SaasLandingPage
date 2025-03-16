import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or your framework plugin

export default defineConfig({
  plugins: [
    react()
  ],
  // No need to manually configure Tailwind here if you're using postcss.config.js
})