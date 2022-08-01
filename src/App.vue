<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'Starknt' },
  ],
})
</script>

<template>
  <main flex justify-center items-center flex-col>
    <router-view />
    <Footer />
  </main>
</template>
