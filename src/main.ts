import { ViteSSG } from 'vite-ssg'
import dayjs from 'dayjs'
import { createHead } from '@vueuse/head'
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'
import routes from '~pages'
import App from '~/App.vue'
import 'uno.css'
import './styles/main.css'
import './styles/markdown.css'
import './styles/prose.css'

const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  if (savedPosition)
    return savedPosition
  else
    return { top: 0 }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app }) => {
    const head = createHead()
    app.use(head)

    dayjs.extend(LocalizedFormat)
  },
)
