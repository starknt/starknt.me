<script setup lang="ts">
import { StarportCarrier } from 'vue-starport'
import { isEnter } from '~/logic'
const router = useRouter()

if (!isEnter.value) {
  router.push('enter')
}

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
