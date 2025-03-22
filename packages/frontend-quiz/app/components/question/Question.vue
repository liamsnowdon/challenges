<script lang="ts" setup>
import { computed, ref } from 'vue'
import Option from '../option/Option.vue'
import Progress from '../progress/Progress.vue'
import Button from '../button/Button.vue'
import ErrorMessage from '../error-message/ErrorMessage.vue'
import type { Question, QuizEntity } from '~~/shared/types'

const { question, quiz, activeQuestionIndex } = defineProps<{
  question: Question
  quiz: QuizEntity
  activeQuestionIndex: number
}>()

const emit = defineEmits<{
  correct: []
  next: []
}>()

const hasSubmitted = ref(false)
const showRequiredError = ref(false)
const selectedOption = ref<string | null>(null)

const progress = computed(() => {
  return (activeQuestionIndex / quiz.questions.length) * 100
})

function onSubmit () {
  if (!selectedOption.value) {
    showRequiredError.value = true
    return
  }

  hasSubmitted.value = true

  if (selectedOption.value === question.answer) {
    emit('correct')
  }
}

function onOptionSelect (option: Question['options'][number]) {
  selectedOption.value = option
  showRequiredError.value = false
}

function onNextQuestionClick () {
  emit('next')
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
      <Option
        v-for="(option, index) in question.options"
        :key="option"
        :option="option"
        :index="index"
        :is-active="selectedOption === option"
        :is-correct="option === question.answer"
        :is-submitted="hasSubmitted"
        @select="onOptionSelect(option)"
      />

      <Button v-if="hasSubmitted" @click="onNextQuestionClick">
        Next Question
      </Button>

      <Button v-else @click="onSubmit">
        Submit Answer
      </Button>

      <ErrorMessage v-if="showRequiredError" message="Please select an answer" />
    </div>
  </div>
</template>
