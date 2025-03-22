<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import Header from '~/components/header/Header.vue'
import Wrapper from '~/components/wrapper/Wrapper.vue'
import WrapperContent from '~/components/wrapper/WrapperContent.vue'
import { createError } from '#imports'
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
  <div v-if="quiz">
    <Header :quiz="quiz" />

    <Wrapper>
      <WrapperContent>
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
      </WrapperContent>
    </Wrapper>
  </div>
</template>
