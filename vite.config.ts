import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

const getViteEnv = (mode, target) => {
  return loadEnv(mode, process.cwd())[target]
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            name: getViteEnv(mode, 'VITE_APP_NAME'),
            favicon: getViteEnv(mode, 'VITE_APP_FAVICON'),
            referrer: mode === 'development' ? 'no-referrer' : 'no-referrer-when-downgrade'
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  }
})
