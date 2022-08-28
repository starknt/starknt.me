<script setup lang="ts">
import type { Post } from '~/types'

const router = useRouter()

const posts: Post[] = router.getRoutes()
  .filter(i => i.path.startsWith('/posts') && (i.meta as any)?.frontmatter?.date)
  // @ts-expect-error
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))
  .map(i => ({
    path: i.path,
    title: (i.meta.frontmatter as any).title,
    date: (i.meta.frontmatter as any).date,
    duration: (i.meta.frontmatter as any).duration,
  }))

console.log(posts)
</script>

<template>
  <template v-for="post in posts">
    <h1>{{ post.title }}</h1>
  </template>
</template>
