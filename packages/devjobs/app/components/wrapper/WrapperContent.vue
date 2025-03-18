<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  size: {
    type: String as PropType<'small' | 'medium'>,
    default: 'medium',
  },
})
</script>

<template>
  <div :max-w="size === 'small' ? '182.5' : '277.5'" w="full" m="x-auto">
    <slot />
  </div>
</template>
