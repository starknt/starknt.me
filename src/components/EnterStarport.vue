<script setup lang="ts">
import { isEnter } from '~/logic'

const timeout = useTimeout(2000)
const router = useRouter()


watch(() => timeout.value, () => {
  isEnter.value = true

  router.push('/')
})
</script>

<template>
  <Enter />
</template>