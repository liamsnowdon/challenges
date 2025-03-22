<script lang="ts" setup>
import SubjectIcon from '../subject-icon/SubjectIcon.vue'

defineProps<{
  icon: string
  name: string
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
    <SubjectIcon :icon="icon" />

    <span class="text-preset-4-mobile md:text-preset-4" p="md:x-4" text="blue-900 dark:white">{{ name }}</span>
  </NuxtLink>
</template>
