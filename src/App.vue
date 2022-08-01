<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'Starknt' },
  ],
})
</script>

<template>
  <SubNav />
  <main px-7 py-10>
    <router-view />
    <Footer />
  </main>
</template>
