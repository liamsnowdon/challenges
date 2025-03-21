<script lang="ts" setup>
import Icon from '../icon/Icon.vue'

defineProps<{
  name: string
  icon: string
}>()

defineEmits<{
  select: []
}>()
</script>

<template>
  <NuxtLink
    :to="{ name: 'quiz', params: { quiz: icon } }"
    flex="~"
    items="center"
    space="x-4"
    p="4"
    bg="white dark:blue-850"
    border="rounded-xl"
    ring="3 transparent hover:purple-600"
    w="full"
  >
    <div
      flex="~"
      items="center"
      justify="center"
      w="10 md:14"
      h="10 md:14"
      rounded="lg"
      :class="{
        'bg-orange-50': icon === 'html',
        'bg-green-100': icon === 'css',
        'bg-blue-50': icon === 'js',
        'bg-purple-100': icon === 'accessibility',
      }"
    >
      <Icon :name="icon" h="7 md:10" />
    </div>

    <span text="lg blue-900 dark:white" font="medium">{{ name }}</span>
  </NuxtLink>
</template>
