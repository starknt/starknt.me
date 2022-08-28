<script setup lang="ts">
import { Starport } from 'vue-starport'
</script>

<template>
  <header z-40 flex justify-end mt-4 mr-8>
    <nav flex gap-x-2 items-center>
      <Starport flex justify-center items-center port="avatar" w24px h24px>
        <Avatar select-none :size="24" />
      </Starport>
      <Starport flex justify-center items-center h24px w24px port="qq">
        <QQ />
      </Starport>
      <Starport flex justify-center items-center h24px w24px port="weChat">
        <WeChat />
      </Starport>
      <Starport flex justify-center items-center h24px w24px port="github">
        <Github />
      </Starport>
      <ToggleTheme />
    </nav>
  </header>
</template>
