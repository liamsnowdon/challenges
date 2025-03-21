<script setup lang="ts">
const { size = 'medium' } = defineProps<{
  size?: 'small' | 'medium'
}>()
</script>

<template>
  <div :max-w="size === 'small' ? '182.5' : '277.5'" w="full" m="x-auto">
    <slot />
  </div>
</template>
