<script lang="ts" setup>
import Header from '../components/header/Header.vue'
import Wrapper from '../components/wrapper/Wrapper.vue'
import WrapperContent from '../components/wrapper/WrapperContent.vue'
import ChallengeCard from '../components/challenge-card/ChallengeCard.vue'
import type { Challenge } from '../types'

const challenges: Challenge[] = [
  {
    name: 'Advice Generator',
    slug: 'advice-generator',
    intro: 'Using the Advice Slip API to generate random quotes of advice.',
    challenge_url: 'https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db',
    body: '',
  },
  {
    name: 'Devjobs',
    slug: 'devjobs',
    intro: 'A jobs board that lists developer jobs.',
    challenge_url: 'https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l',
    body: '',
  },
  {
    name: 'Social Links',
    slug: 'social-links',
    intro: 'A social link-sharing profile.',
    challenge_url: 'https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ',
    body: '',
  },
  {
    name: 'Frontend Quiz',
    slug: 'frontend-quiz',
    intro: 'A quiz app for testing your frontend knowledge.',
    challenge_url: 'https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU',
    body: '',
  },
]
</script>

<template>
  <div>
    <Header title="Coding Challenges" description="This is a library of random coding challenges I've completed." />

    <Wrapper>
      <WrapperContent>
        <div grid="~ cols-1 md:cols-2 lg:cols-3 gap-4 md:gap-6 lg:gap-8">
          <ChallengeCard v-for="challenge in challenges" :key="challenge.name" :challenge="challenge" />
        </div>
      </WrapperContent>
    </Wrapper>
  </div>
</template>
