<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'Starknt' },
  ],
})

console.log(useRouter().getRoutes()[0].meta.frontmatter)
</script>

<template>
  <SubNav />
  <StarportCarrier />
  <main px-7 py-10>
    <router-view />
    <Footer />
  </main>
</template>
