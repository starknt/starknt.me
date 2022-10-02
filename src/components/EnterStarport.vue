<script setup lang="ts">
import { Starport } from 'vue-starport'
import Button from './Button.vue'
const COUNTER = 5
const router = useRouter()
const interval = useInterval(1000)
const handleEnter = () => {
  router.push('/blog')
}

watch(interval, () => {
  if (interval.value === 5)
    setTimeout(() => handleEnter(), 200)
})

const counter = $computed(() => `${COUNTER - interval.value}`)
</script>

<template>
  <div
    flex justify-center items-center flex-col w-screen h-screen bg-gradient-radial bg-gradient-from-emerald
    bg-gradient-to-blue
  >
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

    <Button mt-6 @click="handleEnter">
      <i class="i-mdi-key" />
      <p :title="counter">
        Enter
      </p>
    </Button>
  </div>
</template>
