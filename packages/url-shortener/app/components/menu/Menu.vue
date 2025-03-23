<script lang="ts" setup>
import Button from '../button/Button.vue'
</script>

<template>
  <nav
    pos="absolute top-[calc(100%+24px)] left-0 right-0"
    z="1"
    bg="palette-2"
    p="x-6 y-10"
    divide="y palette-4/25"
    rounded="10px"
  >
    <ul flex="~ col items-center" space="y-7.5" p="b-7.5">
      <li><a href="#" class="text-18px text-white" font="bold">Features</a></li>
      <li><a href="#" class="text-18px text-white" font="bold">Pricing</a></li>
      <li><a href="#" class="text-18px text-white" font="bold">Resources</a></li>
    </ul>

    <div flex="~ col items-center" p="t-8" space="y-6">
      <a href="#" class="text-18px text-white" font="bold">Login</a>

      <Button
        as="a"
        href="#"
        variant="primary"
        pill
        size="large"
        w="full"
      >
        Sign Up
      </Button>
    </div>
  </nav>
</template>
