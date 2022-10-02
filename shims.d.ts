import 'vue-router'
import type { Post } from '~/types'

declare module '*.vue' {
    import { defineComponent } from 'vue'
    const Component: ReturnType<typeof defineComponent>
    export default Component
}

declare module 'vue-router' {
    interface RouteMeta {
        frontmatter: Post
    }
}