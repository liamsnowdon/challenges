<script lang="ts" setup>
import ColorModeToggle from '../color-mode-toggle/ColorModeToggle.vue'
import { useColorMode } from '#imports'

const colorMode = useColorMode()
</script>

<template>
  <header
    flex="~ justify-between items-center"
    p="x-3 y-2 lg:x-4 lg:y-3"
    bg="neutral-0 dark:neutral-800"
    rounded="20px"
    m="b-10 lg:b-16"
  >
    <img :src="colorMode.value === 'dark' ? '/images/logo-dark.svg' : '/images/logo.svg'" alt="Extensions">
    <ColorModeToggle />
  </header>
</template>
