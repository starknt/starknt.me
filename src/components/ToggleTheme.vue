<script setup lang="ts">
import { isDark } from '~/logic'

function toggleTheme() {
  isDark.value = !isDark.value
}
</script>

<template>
  <a class="select-none cursor-pointer dark:opacity-60 hover:dark:opacity-90 hover:dark:text-white hover:text-dark"
    title="Toggle Color Scheme" @click="toggleTheme">
    <i class="i-carbon-sun" v-show="!isDark"></i>
    <i class="i-carbon-moon" v-show="isDark"></i>
  </a>
</template>