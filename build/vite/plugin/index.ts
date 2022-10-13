import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import WindiCSS from 'vite-plugin-windicss'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { visualizer } from 'rollup-plugin-visualizer'

import type { PluginOption } from 'vite'
import { configCompressPlugin } from './compress'
import { configHtmlPlugin } from './html'
import { configMockPlugin } from './mock'
import { configSvgIconsPlugin } from './svgSprite'
import { configAutoImportPlugin } from './autoImport'
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_USE_MOCK } = viteEnv

  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx(), VueSetupExtend()]

  // vite-plugin-windicss
  vitePlugins.push(WindiCSS())

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild))

  //vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild))

  //unplugin-auto-import
  vitePlugins.push(configAutoImportPlugin())

  if (isBuild) {
    //vite-plugin-compression
    vitePlugins.push(configCompressPlugin('brotli', false, false))

    //Packaging Analysis
    vitePlugins.push(
      visualizer({
        filename: './node_modules/.cache/visualizer/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    )
  }

  return vitePlugins
}
