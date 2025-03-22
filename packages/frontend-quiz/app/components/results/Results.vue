<script lang="ts" setup>
import Logo from '../logo/Logo.vue'
import Button from '../button/Button.vue'
import type { QuizEntity } from '~~/shared/types'

defineProps<{
  quiz: QuizEntity
  score: number
}>()

function onPlayAgainClick () {

}
</script>

<template>
  <div grid="~ cols-1 lg:cols-2 gap-10 md:gap-16">
    <div>
      <h1 text="blue-900 dark:white">
        <span class="text-preset-2-mobile-light md:text-preset-2-light">Quiz completed<br></span>
        <span class="text-preset-2-mobile-medium md:text-preset-2-medium">You scored...</span>
      </h1>
    </div>

    <div space="y-4 md:y-8">
      <div
        flex="~ col"
        items="center"
        justify="center"
        p="8 md:12"
        bg="white dark:blue-850"
        rounded="xl md:3xl"
      >
        <Logo :quiz="quiz" m="b-4 md:b-10" />

        <span class="text-preset-1-mobile md:text-preset-1" text="blue-900 dark:white" m="b-4">{{ score }}</span>

        <span class="text-preset-4-mobile md:text-preset-5-medium" text="grey-500 dark:blue-300">out of {{ quiz.questions.length }}</span>
      </div>

      <Button :to="{ name: 'index' }" @click="onPlayAgainClick">
        Play Again
      </Button>
    </div>
  </div>
</template>
