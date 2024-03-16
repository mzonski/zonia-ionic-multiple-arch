import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "login",
      filename: 'remoteEntry.js',
      exposes: {
        "./Login": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
      mode: "development"
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    open: true,
    port: 3001,
  },
  preview: {
    port: 3001,
    host: true,
  },
})
