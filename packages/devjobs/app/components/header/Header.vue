<script lang="ts" setup>
import ColorModeToggle from '../color-mode-toggle/ColorModeToggle.vue'
import WrapperContent from '../wrapper/WrapperContent.vue'
</script>

<template>
  <header
    h="40"
    w="full"
    p="t-10.5 x-10"
    bg="center cover no-repeat"
    class="bg-[url(/images/mobile/bg-pattern-header.svg)] md:bg-[url(/images/tablet/bg-pattern-header.svg)] lg:bg-[url(/images/desktop/bg-pattern-header.svg)]"
  >
    <WrapperContent
      flex="~"
      items="start"
      justify="between"
    >
      <NuxtLink :to="{ name: 'index' }">
        <img src="/images/desktop/logo.svg" alt="devjobs logo" width="115" height="32">
      </NuxtLink>

      <ColorModeToggle />
    </WrapperContent>
  </header>
</template>
