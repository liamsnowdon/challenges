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
            <h1 text="blue-900 dark:white">
              <span class="text-preset-2-mobile-light md:text-preset-2-light">Welcome to the<br></span>
              <span class="text-preset-2-mobile-medium md:text-preset-2-medium">Frontend Quiz!</span>
            </h1>

            <p class="text-preset-5-mobile md:text-preset-6" text="grey-500 dark:blue-300">
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
            />
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  </div>
</template>
