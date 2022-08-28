<script setup lang="ts">
import { StarportCarrier } from 'vue-starport'

useHead({
  meta: [
    { property: 'og:title', content: 'Starknt' },
  ],
})
</script>

<template>
  <StarportCarrier>
    <router-view />
  </StarportCarrier>
</template>
