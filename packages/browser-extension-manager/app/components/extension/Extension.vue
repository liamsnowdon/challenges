<script lang="ts" setup>
import Switch from '../switch/Switch.vue'
import type { Extension } from '~/types'

defineProps<{
  extension: Extension
}>()

const emit = defineEmits<{
  remove: []
}>()

function remove () {
  emit('remove')
}
</script>

<template>
  <div
    flex="~ col"
    p="5"
    bg="neutral-0 dark:neutral-800"
    space="y-6"
    border="~ neutral-200 dark:neutral-600 rounded-5"
  >
    <div flex="1 ~ items-start" space="x-4">
      <img :src="extension.logo" :alt="`${extension} logo`">

      <div flex="~ col" space="y-2">
        <span text="neutral-900 dark:neutral-0" class="text-preset-2">
          {{ extension.name }}
        </span>
        <p text="neutral-600 dark:neutral-300" class="text-preset-5">
          {{ extension.description }}
        </p>
      </div>
    </div>

    <div flex="~ items-center justify-between">
      <button
        type="button"
        bg="transparent hover:red-400"
        border="~ neutral-300 dark:neutral-600 hover:red-400 rounded-full"
        p="x-4 y-2"
        text="neutral-900 dark:neutral-0"
        class="text-preset-6"
        @click="remove"
      >
        Remove
      </button>

      <Switch v-model="extension.isActive" />
    </div>
  </div>
</template>
