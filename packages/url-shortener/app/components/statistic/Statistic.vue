<script lang="ts" setup>
import Icon from '../icon/Icon.vue'

defineProps<{
  icon: string
  title: string
}>()
</script>

<template>
  <div
    flex="~ col items-center lg:items-start"
    bg="white"
    rounded="5px"
    p="x-8 b-10.25"
    text="center lg:left"
    z="1"
  >
    <div
      flex="~"
      items="center"
      justify="center"
      w="22"
      h="22"
      rounded="full"
      bg="palette-2"
      transform="~ translate-y--1/2"
    >
      <Icon :name="icon" />
    </div>

    <h3 text="22px palette-1" font="bold" m="t--2.75 b-3">
      {{ title }}
    </h3>

    <p text="15px palette-4" font="medium">
      <slot />
    </p>
  </div>
</template>
