<script lang="ts" setup>

</script>

<template>
  <header
    h="40"
    w="full"
    p="t-10.5 x-10"
    flex="~"
    items="start"
    justify="between"
    bg="center cover no-repeat"
    class="bg-[url(/images/challenges/devjobs/mobile/bg-pattern-header.svg)] md:bg-[url(/images/challenges/devjobs/tablet/bg-pattern-header.svg)] lg:bg-[url(/images/challenges/devjobs/desktop/bg-pattern-header.svg)]"
  >
    <NuxtLink :to="{ name: 'devjobs' }">
      <img src="/images/challenges/devjobs/desktop/logo.svg" alt="devjobs logo" width="115" height="32">
    </NuxtLink>

    <div>Switch</div>
  </header>
</template>
