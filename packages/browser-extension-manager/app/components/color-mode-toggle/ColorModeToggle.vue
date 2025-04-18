<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../icon/Icon.vue'
import { useColorMode } from '#imports'

const colorMode = useColorMode()

const value = computed(() => {
  return colorMode.value === 'dark'
})

function onClick () {
  const newValue = value.value ? 'light' : 'dark'

  colorMode.preference = newValue
}
</script>

<template>
  <button
    type="button"
    pos="relative"
    flex="inline none items-center justify-center"
    h="12.5"
    w="12.5"
    rounded="xl"
    cursor="pointer"
    outline="focus:none"
    bg="neutral-100 dark:neutral-700"
    :class="{
      'focus:ring-1 focus:ring-neutral-600': true,
    }"
    @click="onClick"
  >
    <Icon :name="value ? 'sun' : 'moon'" h="5.5" />
  </button>
</template>
