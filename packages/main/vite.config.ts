import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // @ts-ignore
    reactScopedCssPlugin(),
    federation({
      name: "microfrontend-demo",
      remotes: {
        frontendComponentReset: "http://localhost:5001/assets/entry.js"
      },
      shared: [
        "react", "react-dom"
      ]
    })
  ],
  build: {
    cssCodeSplit: false,
    modulePreload: false,
    target: 'esnext'
  }
})
