import path from 'path'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
import LinguiLoader from 'unplugin-lingui-loader/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  },
  plugins: [
    LinguiLoader(),
    react({
      babel: { plugins: ['macros'] }
    }),
    viteEslint({
      failOnError: false
    }),
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: './auto-imports.d.ts'
    })
  ]
})
