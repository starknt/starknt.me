<script setup lang="ts">
const props = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

console.log(props)
</script>

<template>
  <article>
    <slot />
  </article>
</template>