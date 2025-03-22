<script lang="ts" setup>
const { index } = defineProps<{
  name: string
  index: number
  isActive: boolean
}>()

defineEmits<{
  select: []
}>()

const letter = ['A', 'B', 'C', 'D'][index]!
</script>

<template>
  <button
    flex="~"
    items="center"
    space="x-4"
    p="4"
    bg="white dark:blue-850"
    border="rounded-xl"
    ring="3 transparent hover:purple-600"
    w="full"
    text="left"
    @click="$emit('select')"
  >
    <div
      flex="~ none"
      items="center"
      justify="center"
      w="10 md:14"
      h="10 md:14"
      rounded="lg"
      bg="grey-50"
    >
      <span text="lg md:3xl dark:grey-500">{{ letter }}</span>
    </div>

    <span class="text-preset-4-mobile md:text-preset-4" p="md:x-4" text="blue-900 dark:white">{{ name }}</span>
  </button>
</template>
