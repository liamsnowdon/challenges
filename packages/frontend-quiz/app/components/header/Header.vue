<script lang="ts" setup>
import ColorModeToggle from '../color-mode-toggle/ColorModeToggle.vue'
import WrapperContent from '../wrapper/WrapperContent.vue'
import SubjectIcon from '../subject-icon/SubjectIcon.vue'
import type { QuizEntity } from '~~/shared/types'

defineProps<{
  quiz?: QuizEntity
}>()
</script>

<template>
  <header
    w="full"
    p="y-6.5 x-6 md:t-13.5 md:b-11.75 md:x-16"
    bg="center cover no-repeat"
  >
    <WrapperContent
      flex="~"
      items="start"
      justify="between"
    >
      <div flex="~" items="center" space="x-4 md:x-6">
        <template v-if="quiz">
          <SubjectIcon v-if="quiz" :icon="quiz.icon" />
          <span class="text-preset-4-mobile md:text-preset-4" text="blue-900 dark:white">{{ quiz.title }}</span>
        </template>
      </div>

      <ColorModeToggle />
    </WrapperContent>
  </header>
</template>
