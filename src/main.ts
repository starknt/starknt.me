import { ViteSSG } from 'vite-ssg'
import App from '~/App.vue'
import routes from '~pages'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'
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
  () => {
    dayjs.extend(LocalizedFormat)
  },
)
