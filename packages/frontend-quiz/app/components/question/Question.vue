<script lang="ts" setup>
import { computed } from 'vue'
import Answer from '../answer/Answer.vue'
import Progress from '../progress/Progress.vue'
import Button from '../button/Button.vue'
import type { Question, QuizEntity } from '~~/shared/types'

const { quiz, activeQuestionIndex } = defineProps<{
  question: Question
  quiz: QuizEntity
  activeQuestionIndex: number
}>()

const progress = computed(() => {
  return (activeQuestionIndex / quiz.questions.length) * 100
})

function submit () {
  console.log('submit')
}
</script>

<template>
  <div grid="~ cols-1 lg:cols-2 gap-10 md:gap-16">
    <div flex="~ col">
      <span m="b-4 md:b-6" class="text-preset-5-mobile md:text-preset-6" text="grey-500 dark:blue-300">
        Question {{ activeQuestionIndex + 1 }} of {{ quiz.questions.length }}
      </span>

      <h1 class="text-preset-3-mobile md:text-preset-3" text="blue-900 dark:white" m="b-6 md:b-10 lg:b-46">
        {{ question.question }}
      </h1>

      <Progress :percentage="progress" />
    </div>

    <div space="y-4">
      <Answer
        v-for="(option, index) in question.options"
        :key="option"
        :name="option"
        :index="index"
        :is-active="false"
      >
        {{ quiz.title }}
      </Answer>

      <Button @click="submit">
        Submit Answer
      </Button>
    </div>
  </div>
</template>
