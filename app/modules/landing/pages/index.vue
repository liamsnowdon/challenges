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
]
</script>

<template>
  <div h="full" bg="gray-950" text="gray-400">
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
