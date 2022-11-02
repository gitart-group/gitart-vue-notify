// @ts-ignore
import { URL, fileURLToPath } from 'node:url'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import windi from 'vite-plugin-windicss'
import vuetify from 'vite-plugin-vuetify'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const configFile = path.resolve(fileURLToPath(new URL('.', import.meta.url)), './src/scss/settings.scss')

  return {
    plugins: [
      vue(),
      vuetify({
        styles: {
          configFile,
        },
      }),
      windi(),
      autoImport({
        imports: [
          'vue',
          '@vueuse/core',
        ],
        dts: 'src/auto-imports.d.ts',
      }),
      components({
        dts: 'src/components.d.ts',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
