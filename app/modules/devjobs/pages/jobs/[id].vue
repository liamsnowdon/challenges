<script lang="ts" setup>
import { useFavicon } from '@vueuse/core'
import { useRoute } from 'vue-router'
import Header from '~/modules/devjobs/components/header/Header.vue'
import WrapperContent from '~/modules/devjobs/components/wrapper/WrapperContent.vue'
import JobHeader from '~/modules/devjobs/components/job-header/JobHeader.vue'
import JobDescription from '~/modules/devjobs/components/job-description/JobDescription.vue'
import Button from '~/modules/devjobs/components/button/Button.vue'
import { useFetch, useHead } from '#imports'

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
  <div font="[Kumbh_Sans,sans-serif]" bg="devjobs-secondary-lightgrey dark:devjobs-primary-midnight">
    <Header />

    <template v-if="job">
      <div p="x-6 md:x-9.75 b-16 md:b-13.25 lg:b-20" m="t--4 md:t--10">
        <WrapperContent size="small" space="y-6 md:y-8">
          <JobHeader :job="job" />
          <JobDescription :job="job" />
        </WrapperContent>
      </div>

      <div p="6 md:x-10" bg="devjobs-secondary-white dark:devjobs-primary-darkblue">
        <WrapperContent size="small">
          <div flex="~" items="center" justify="between">
            <div class="hidden md:flex" flex="col md:1" space="y-2">
              <h2 text="xl devjobs-primary-darkblue" font="bold">
                {{ job.position }}
              </h2>
              <span text="devjobs-secondary-darkgrey">
                {{ job.company }}
              </span>
            </div>
            <div flex="1 md:none">
              <Button w="full">
                Apply Now
              </Button>
            </div>
          </div>
        </WrapperContent>
      </div>
    </template>
  </div>
</template>
