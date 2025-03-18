<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import Loader from '../loader/Loader.vue'

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
  loading: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
})

defineEmits<{
  click: [Event]
}>()

const variantClasses = computed(() => {
  return {
    primary: [
      'text-secondary-white',
      'bg-primary-violet hover:bg-primary-lightviolet',
      'focus:ring-primary-lightviolet focus:ring-offset-primary-midnight',
    ],
    secondary: [
      'text-primary-violet dark:text-secondary-white',
      'bg-primary-violet/10 hover:bg-primary-violet/30 dark:bg-secondary-white/10 dark:hover:bg-secondary-white/35',
      'focus:ring-primary-violet/30 dark:focus:ring-secondary-white/35 focus:ring-offset-secondary-white',
    ],
  }[props.variant]
})

const modifyClasses = computed(() => {
  return {
    'w-full': props.fullWidth,
  }
})
</script>

<template>
  <Component
    :is="as"
    :to="to"
    :class="[variantClasses, modifyClasses]"
    class="relative inline-flex items-center justify-center h-12 px-10 rounded-5px whitespace-nowrap font-bold overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2"
    @click="$emit('click', $event)"
  >
    <Loader
      v-if="loading"
      h="5.5"
      w="5.5"
    />

    <span
      flex="inline"
      items="center"
      p="x-1"
    >
      <slot />
    </span>
  </Component>
</template>
