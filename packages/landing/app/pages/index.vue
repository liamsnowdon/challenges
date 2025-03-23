<script lang="ts" setup>
import Header from '../components/header/Header.vue'
import Wrapper from '../components/wrapper/Wrapper.vue'
import WrapperContent from '../components/wrapper/WrapperContent.vue'
import ChallengeCard from '../components/challenge-card/ChallengeCard.vue'
import type { Challenge } from '../types'

const challenges: Challenge[] = [
  {
    name: 'URL Shortener Landing Page',
    slug: 'url-shortener',
    intro: 'A landing page for a URL shortener product using the cleanuri.com API.',
    challenge_url: 'https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G',
    body: '',
  },
  {
    name: 'QR Code Component',
    slug: 'qr-code-component',
    intro: 'A simple QR code component in a card.',
    challenge_url: 'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H',
    body: '',
  },
  {
    name: 'Frontend Quiz',
    slug: 'frontend-quiz',
    intro: 'A quiz app for testing your frontend knowledge.',
    challenge_url: 'https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU',
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
    name: 'Devjobs',
    slug: 'devjobs',
    intro: 'A jobs board that lists developer jobs.',
    challenge_url: 'https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l',
    body: '',
  },
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
