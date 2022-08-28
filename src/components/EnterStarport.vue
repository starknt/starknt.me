<script setup lang="ts">
import { Starport } from 'vue-starport'
const router = useRouter()
const handleEnter = () => {
  router.push('/blog/posts')
}
</script>

<template>
  <div flex justify-center items-center flex-col w-screen h-screen bg-gradient-radial bg-gradient-from-emerald
    bg-gradient-to-blue>
    <Starport w-48 h-48 port="avatar" class="rounded-50% flex justify-center items-center overflow-hidden">
      <Avatar :size="156" />
    </Starport>
    <div mt-4 flex gap-4 items-center justify-center>
      <Starport flex items-center justify-center w24px h24px port="github">
        <Github />
      </Starport>
      <Starport flex items-center justify-center w24px h24px port="qq">
        <QQ />
      </Starport>
      <Starport flex items-center justify-center w24px h24px port="weChat">
        <WeChat />
      </Starport>
    </div>

    <button select-none type="button" @click="handleEnter" mt-6 flex gap-x-2 justify-center items-center>
      <i class="i-mdi-key" />
      Enter
    </button>
  </div>
</template>