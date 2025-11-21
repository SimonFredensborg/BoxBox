import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),svgr(), tailwindcss()],
  server: {
    port: 3000, // Frontend dev server port
    host: true, // Allow external access to the dev server
    watch: {
      usePolling: true, // Required for environments like Docker or WSL
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
