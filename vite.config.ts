import type { UserConfig, ConfigEnv } from 'vite'

import pkg from './package.json'

import dayjs from 'dayjs'
import { loadEnv } from 'vite'
import path from 'path'

import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/vite/plugin'
import { createProxy } from './build/vite/proxy'
import { OUTPUT_DIR } from './build/constant'

const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  // extract .env content by mode: development ? production
  const env = loadEnv(mode, root)
  // The boolean or number type read by loadEnv is a string. This function can be converted to boolean type or number type
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv
  return {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *; @use "@/styles/main.scss" as *;`,
          javascriptEnabled: true
        }
      }
    },
    server: {
      host: true,
      port: VITE_PORT,
      // Load proxy configuration from .env
      proxy: createProxy(VITE_PROXY)
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: OUTPUT_DIR,
      chunkSizeWarningLimit: 2000
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    plugins: createVitePlugins(viteEnv, command === 'build')
  }
}
