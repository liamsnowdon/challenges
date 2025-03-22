<script lang="ts" setup>
import SubjectIcon from '../subject-icon/SubjectIcon.vue'
import type { QuizEntity } from '~~/shared/types'

defineProps<{
  quiz: QuizEntity
}>()
</script>

<template>
  <div flex="~" items="center" space="x-4 md:x-6">
    <SubjectIcon v-if="quiz" :icon="quiz.icon" />
    <span class="text-preset-4-mobile md:text-preset-4" text="blue-900 dark:white">{{ quiz.title }}</span>
  </div>
</template>
