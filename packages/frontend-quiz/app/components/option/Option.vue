<script lang="ts" setup>
import Icon from '../icon/Icon.vue'

const { index, isSubmitted } = defineProps<{
  option: string
  index: number
  isActive: boolean
  isCorrect: boolean
  isSubmitted: boolean
}>()

const emit = defineEmits<{
  select: []
}>()

const letter = ['A', 'B', 'C', 'D'][index]!

function onClick () {
  if (!isSubmitted) {
    emit('select')
  }
}
</script>

<template>
  <button
    type="button"
    flex="~"
    items="center"
    space="x-4"
    p="4"
    bg="white dark:blue-850"
    border="rounded-xl"
    ring="3"
    w="full"
    text="left"
    outline="focus:none"
    :class="{
      'ring-purple-600': isActive && !isSubmitted,
      'ring-green-500': isActive && isSubmitted && isCorrect,
      'ring-red-500': isActive && isSubmitted && !isCorrect,
      'ring-transparent hover:ring-purple-600 focus:ring-purple-600': !isSubmitted && !isActive,
      'ring-transparent': isSubmitted && !isActive,
    }"
    @click="onClick"
  >
    <div
      flex="~ none"
      items="center"
      justify="center"
      w="10 md:14"
      h="10 md:14"
      rounded="lg"
      :class="{
        'bg-purple-600 text-white': isActive && !isSubmitted,
        'bg-green-500 text-white': isActive && isSubmitted && isCorrect,
        'bg-red-500 text-white': isActive && isSubmitted && !isCorrect,
        'bg-grey-50 text-grey-500': !isSubmitted || !isActive,
      }"
    >
      <span class="text-preset-4-mobile md:text-preset-4">{{ letter }}</span>
    </div>

    <span flex="1" class="text-preset-4-mobile md:text-preset-4" p="md:x-4" text="blue-900 dark:white">{{ option }}</span>

    <Icon v-if="isSubmitted && isCorrect" name="correct" h="8 md:10" />
    <Icon v-else-if="isSubmitted && !isCorrect && isActive" name="incorrect" h="8 md:10" />
  </button>
</template>
