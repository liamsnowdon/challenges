<script lang="ts" setup>
import { useFavicon } from '@vueuse/core'
import { useRoute } from 'vue-router'
import Header from '../../components/header/Header.vue'
import Wrapper from '../../components/wrapper/Wrapper.vue'
import WrapperContent from '../../components/wrapper/WrapperContent.vue'
import JobHeader from '../../components/job-header/JobHeader.vue'
import JobDescription from '../../components/job-description/JobDescription.vue'
import { useHead, useFetch } from '#imports'

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap' },
  ],
})

useFavicon().value = 'frontend-mentor.png'

const route = useRoute()
const id = route.params.id

const { data: job } = await useFetch(`/api/devjobs/jobs/${id}`)
</script>

<template>
  <div h="full" font="[Kumbh_Sans,sans-serif]" bg="devjobs-secondary-lightgrey dark:devjobs-primary-midnight">
    <Header />

    <Wrapper m="t--4 md:t--10">
      <WrapperContent size="small" space="y-6 md:y-8">
        <template v-if="job">
          <JobHeader :job="job" />
          <JobDescription :job="job" />
        </template>
      </WrapperContent>
    </Wrapper>
  </div>
</template>
