<script setup lang="ts">
const props = defineProps({
  size: {
    type: Number,
    default: 48
  }
})

const avatarSize = $computed(() => `${props.size}px`)
</script>

<template>
  <div inline-flex overflow-hidden class="rounded-50% size">
    <img w-full h-full block src="https://avatars.githubusercontent.com/u/64941905?v=4" alt="avatar" />
  </div>
</template>

<style scoped>
.size {
  width: v-bind(avatarSize);
  height: v-bind(avatarSize);
}
</style>