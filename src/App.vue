<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'Starknt' },
  ],
})
</script>

<template>
  <main>
    <router-view />
    <Footer />
  </main>
</template>
