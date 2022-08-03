<script setup lang="ts">
import { Starport } from 'vue-starport'
</script>

<template>
  <div flex justify-center items-center flex-col w-screen h-screen bg-gradient-radial bg-gradient-from-emerald
    bg-gradient-to-blue>
    <Starport w-40 h-40 port="avatar" flex justify-center items-center>
      <Avatar :size="140" />
    </Starport>
    <div mt-4 flex gap-4 items-center justify-center>
      <Starport w24px h24px port="github">
        <Github />
      </Starport>
      <Starport w24px h24px port="qq">
        <QQ />
      </Starport>
      <Starport w24px h24px port="weChat">
        <WeChat />
      </Starport>
    </div>
  </div>
</template>