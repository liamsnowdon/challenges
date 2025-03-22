<script lang="ts" setup>
import { computed, resolveComponent } from 'vue'

const { to } = defineProps<{
  to?: { name: string }
}>()

defineEmits<{
  click: [Event]
}>()

const component = computed(() => {
  if (to) {
    return resolveComponent('NuxtLink')
  }

  return 'button'
})
</script>

<template>
  <Component
    :is="component"
    :to="to"
    pos="relative"
    flex="none inline"
    items="center"
    justify="center"
    h="14 md:23"
    p="4 md:8"
    rounded="xl md:3xl"
    whitespace="nowrap"
    overflow="hidden"
    outline="focus:none"
    ring="focus:2 focus:offset-2 focus:purple-600 focus:offset-black"
    bg="purple-600 hover:purple-400"
    w="full"
    class="text-preset-4-mobile md:text-preset-4 text-white"
    @click="$emit('click', $event)"
  >
    <span
      flex="inline"
      items="center"
      p="x-1"
    >
      <slot />
    </span>
  </Component>
</template>
