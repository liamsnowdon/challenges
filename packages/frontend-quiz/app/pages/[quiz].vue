<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import Header from '~/components/header/Header.vue'
import Content from '~/components/content/Content.vue'
import { createError, useSeoMeta } from '#imports'
import quizzes from '~/assets/data/quizzes.json'
import Question from '~/components/question/Question.vue'
import Results from '~/components/results/Results.vue'
import type { QuizEntity } from '~~/shared/types'

const route = useRoute()
const quiz = quizzes.find(q => q.icon === route.params.quiz) as QuizEntity | undefined

if (!quiz) {
  throw createError({
    statusCode: 404,
    message: 'Subject not found',
  })
}

useSeoMeta({
  title: `${quiz.title} Quiz | Frontend Mentor Frontend Quiz`,
  description: () => {
    if (quiz.title === 'HTML') {
      return 'Test your HTML skills with our interactive quiz! From basic tags to advanced elements, challenge yourself and level up your web development knowledge.'
    }
    if (quiz.title === 'CSS') {
      return 'Think you know CSS? Take our quiz and prove your styling expertise! From selectors to rules, see how well you can master the art of design.'
    }
    if (quiz.title === 'JavaScript') {
      return 'Ready to put your JavaScript knowledge to the test? Try our quiz and tackle questions on functions, loops, and more!'
    }
    if (quiz.title === 'Accessibility') {
      return 'How accessible is your web knowledge? Take our accessibility quiz and learn best practices for building inclusive and user-friendly websites.'
    }
  },
})

const state = ref<'started' | 'finish'>('started')
const score = ref(0)
const activeQuestionIndex = ref(0)
const question = computed(() => quiz.questions[activeQuestionIndex.value]!)

function onCorrectAnswer () {
  score.value++
}

function onNextQuestion () {
  activeQuestionIndex.value++
}

function onFinish () {
  state.value = 'finish'
}
</script>

<template>
  <div v-if="quiz" p="md:x-16 md:y-10">
    <Header :quiz="quiz" />

    <div p="x-6 md:x-0">
      <Content>
        <Question
          v-if="state === 'started'"
          :key="question.question"
          :question="question"
          :quiz="quiz"
          :active-question-index="activeQuestionIndex"
          @correct="onCorrectAnswer"
          @next="onNextQuestion"
          @finish="onFinish"
        />

        <Results
          v-else-if="state === 'finish'"
          :quiz="quiz"
          :score="score"
        />
      </Content>
    </div>
  </div>
</template>
