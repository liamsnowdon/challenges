<script lang="ts" setup>
import { computed } from 'vue'

const {
  as = 'button',
  variant = 'primary',
  disabled = false,
  size = 'base',
  pill = false,
} = defineProps<{
  as?: 'button' | 'a'
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'base' | 'large'
  disabled?: boolean
  pill?: boolean
  href?: string
}>()

defineEmits<{
  click: [Event]
}>()

const variantClasses = computed(() => {
  return {
    primary: [
      'text-white',
      'bg-palette-6 hover:bg-palette-6/50',
      'focus:ring-palette-6',
    ],
    secondary: [
      'text-white',
      'bg-palette-2 hover:bg-palette-2/50',
      'focus:ring-palette-2',
    ],
  }[variant]
})

const sizeClasses = computed(() => {
  return {
    'h-10 px-5 rounded-5px text-base lg:text-15px': size === 'small',
    'h-14 px-10 rounded-5px text-20px': size === 'base',
    'h-12 lg:h-16 px-10 rounded-10px text-18px lg:text-20px': size === 'large',
  }
})

const modifyClasses = computed(() => {
  return {
    'rounded-full': pill,
  }
})
</script>

<template>
  <Component
    :is="as"
    :href="href"
    :class="[variantClasses, modifyClasses, sizeClasses]"
    class="relative flex-none inline-flex items-center justify-center whitespace-nowrap font-bold overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2"
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
