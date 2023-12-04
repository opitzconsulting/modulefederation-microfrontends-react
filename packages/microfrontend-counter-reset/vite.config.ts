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
      name: "microfrontend-component-reset",
      filename: "entry.js",
      exposes: {
        "./ResetCounter": "./src/components/ResetCounter"
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
