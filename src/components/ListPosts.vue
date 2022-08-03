<script setup lang="ts">
import { Post } from '~/types'

const router = useRouter()

const posts: Post[] = router.getRoutes()
// .filter(i => i.path.startsWith('/posts') && (i.meta as any)?.frontmatter?.date)
// .map(i => ({
//   title: (i.meta.frontmatter as any).title,
//   date: (i.meta.frontmatter as any).date,
//   duration: (i.meta.frontmatter as any).duration
// }))

console.log(posts)
</script>

<template>

</template>