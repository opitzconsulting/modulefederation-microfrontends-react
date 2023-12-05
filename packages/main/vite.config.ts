import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {

  console.log(mode)
  
  return ({
    plugins: [
      react(),
      // @ts-ignore
      reactScopedCssPlugin(),
      //federation({
      //  name: "microfrontend-demo",
      //  remotes: {
      //    frontendComponentReset: "http://localhost:5001/assets/entry.js"
      //  },
      //  shared: [
      //    "react", "react-dom"
      //  ]
      //})
    ],
    build: {
      cssCodeSplit: false,
      modulePreload: false,
      target: 'esnext'
    },
    resolve: {
      alias: {
        "@microfrontend/tsc-library/dist/":  mode === "production" ? "http://localhost:5002/" : "@microfrontend/tsc-library/dist/"
      }
    }
  })
})
