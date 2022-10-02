<script setup lang="ts">
import type { Post } from '~/types'

const router = useRouter()

const posts = router.getRoutes()
  .filter(i => i.path.startsWith('/blog/posts') && i.meta.frontmatter?.date)
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))
  .map(i => ({
    path: i.path,
    title: i.meta.frontmatter.title,
    date: i.meta.frontmatter.date,
    duration: i.meta.frontmatter.duration,
  }))

const handleRoute = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div flex="~ col gap-4" rounded-md>
    <h2 text-xl>
      文章列表
    </h2>
    <div v-for="post in posts" :key="post.date" :to="post.path" 
      flex="~ col" gap-y-2 p-4 bg-gray-2 op-50 hover="op-100 bg-gray-100"
      dark="bg-transparent dark:op-90 hover:bg-transparent hover:op-100" 
      rounded-md cursor-pointer
      @click="handleRoute(post.path)">
      <div>
        {{ post.title }}
      </div>
      <div self-end>
        <span text-xs>
          {{ post.date }}
        </span>
      </div>
    </div>
  </div>
</template>
