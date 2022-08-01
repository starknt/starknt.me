import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'
import anchor from 'markdown-it-anchor'
import LinkAttributes from 'markdown-it-link-attributes'
import { slugify } from './slugify'
import { defineConfig } from 'vite'
import { alias } from './alias'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      reactivityTransform: true,
      include: [/\.vue$/, /\.md$/]
    }),
    Unocss({
      configFile: 'unocss.config.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
        '@vueuse/head'
      ],
      dts: 'auto-imports.d.ts',
      dirs: [
        './src/composables',
      ],
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'components.d.ts',
      dirs: [
        './src/components',
      ],
    }),
    Pages({
      extensions: ['vue', 'md']
    }),
    Markdown({
      headEnabled: true,
      markdownItOptions: {
        quotes: '""\'\'',
      },
      markdownItSetup(md) {
        md.use(anchor, {
          permalink: anchor.permalink.linkInsideHeader({
            symbol: "#",
            renderAttrs: () => ({ 'aria-hidden': 'true' })
          }),
          slugify
        })

        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      }
    })
  ],
  resolve: {
    alias,
  },
  ssgOptions: {
    formatting: 'minify',
    format: 'cjs',
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
