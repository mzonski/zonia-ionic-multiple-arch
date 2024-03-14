import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "runtime",
      filename: 'remoteEntry.js',
      remotes: {
        login: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  resolve: {
    alias: {
      '@zonia/module-federation': path.join(__dirname, "../../packages/moduleFederation"),
    }
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    open: true,
    port: 3000,
  },
  preview: {
    port: 3000,
  },
})
