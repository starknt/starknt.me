import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'
import anchor from 'markdown-it-anchor'
import LinkAttributes from 'markdown-it-link-attributes'
import Shiki from 'markdown-it-shiki'
import TOC from 'markdown-it-table-of-contents'
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
      wrapperClasses: 'prose m-auto',
      headEnabled: true,
      markdownItOptions: {
        quotes: '""\'\'',
      },
      markdownItSetup(md) {
        md.use(Shiki, {
          theme: {
            light: 'material-lighter',
            dark: 'material-darker',
          },
        })

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

        md.use(TOC, {
          includeLevel: [1, 2, 3],
          slugify,
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
