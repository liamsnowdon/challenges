<script lang="ts" setup>
import { useFavicon } from '@vueuse/core'
import Header from '../components/header/Header.vue'
import JobCard from '../components/job-card/JobCard.vue'
import Wrapper from '../components/wrapper/Wrapper.vue'
import WrapperContent from '../components/wrapper/WrapperContent.vue'
import { useHead, useFetch } from '#imports'

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap' },
  ],
})

useFavicon().value = 'frontend-mentor.png'

const { data: jobs } = await useFetch('/api/devjobs/jobs')
</script>

<template>
  <div font="[Kumbh_Sans,sans-serif]" bg="devjobs-secondary-lightgrey dark:devjobs-primary-midnight">
    <Header />

    <Wrapper>
      <WrapperContent>
        <div grid="~ cols-1 md:cols-2 lg:cols-3 gap-y-12.5 md:gap-y-16.25 md:gap-x-3 lg:gap-x-7.5">
          <JobCard v-for="job in jobs" :key="job.id" :job="job" />
        </div>
      </WrapperContent>
    </Wrapper>
  </div>
</template>
