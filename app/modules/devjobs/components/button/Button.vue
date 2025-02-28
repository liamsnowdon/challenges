<script lang="ts" setup>
import { computed, type PropType } from 'vue'

const props = defineProps({
  as: {
    type: String as PropType<'button' | 'a'>,
    default: 'button',
  },
  variant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  },
  to: {
    type: [String, Object] as PropType<string | { name: string }>,
    required: false,
  },
})

defineEmits<{
  click: [Event]
}>()

const variantClasses = computed(() => {
  return {
    primary: [
      'text-devjobs-secondary-white',
      'bg-devjobs-primary-violet hover:bg-devjobs-primary-lightviolet',
      'focus:ring-devjobs-primary-lightviolet focus:ring-offset-devjobs-primary-midnight',
    ],
    secondary: [
      'text-devjobs-primary-violet',
      'bg-devjobs-primary-violet/10 hover:bg-devjobs-primary-violet/30 dark:bg-devjobs-secondary-white/10 dark:bg-devjobs-secondary-white/35',
      'focus:ring-devjobs-primary-violet/30 dark:focus:ring-devjobs-secondary-white/35 focus:ring-offset-devjobs-secondary-white',
    ],
  }[props.variant]
})
</script>

<template>
  <Component
    :is="as"
    :to="to"
    :class="variantClasses"
    class="relative inline-flex items-center justify-center h-12 px-10 rounded-5px whitespace-nowrap font-bold overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2"
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
