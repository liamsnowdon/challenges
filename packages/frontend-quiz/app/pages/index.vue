<script lang="ts" setup>
import Header from '~/components/header/Header.vue'
import Wrapper from '~/components/wrapper/Wrapper.vue'
import WrapperContent from '~/components/wrapper/WrapperContent.vue'
import Subject from '~/components/subject/Subject.vue'
import quizzes from '~/assets/data/quizzes.json'
</script>

<template>
  <div>
    <Header />

    <Wrapper>
      <WrapperContent>
        <div grid="~ cols-1 lg:cols-2 gap-10 md:gap-16">
          <div space="y-4">
            <h1 text="4xl md:6xl blue-900 dark:white" font="light">
              Welcome to the <span font="medium">Frontend Quiz!</span>
            </h1>

            <p text="sm md:xl grey-500 dark:blue-300" font="leading-7.5 italic">
              Pick a subject to get started.
            </p>
          </div>

          <div space="y-4">
            <Subject
              v-for="quiz in quizzes"
              :key="quiz.title"
              :name="quiz.title"
              :icon="quiz.icon"
              :is-active="false"
            >
              {{ quiz.title }}
            </Subject>
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  </div>
</template>
