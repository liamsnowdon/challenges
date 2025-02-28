<script lang="ts" setup>
import { useFavicon } from '@vueuse/core'
import { ref } from 'vue'
import Header from '../components/header/Header.vue'
import JobCard from '../components/job-card/JobCard.vue'
import Wrapper from '../components/wrapper/Wrapper.vue'
import WrapperContent from '../components/wrapper/WrapperContent.vue'
import Pagination from '../components/pagination/Pagination.vue'
import { useHead, useAsyncData } from '#imports'
import type { JobEntity } from '~~/shared/types/devjobs'

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap' },
  ],
})

useFavicon().value = 'frontend-mentor.png'

const page = ref(0)
const jobs = ref<JobEntity[]>([])

const { data, status } = await useAsyncData(`jobs`, async () => {
  const response = await $fetch('/api/devjobs/jobs', {
    params: {
      page: page.value,
    },
  })

  jobs.value.push(...response.data)

  return response
}, {
  watch: [page],
})

function onPaginationClick () {
  page.value++
}
</script>

<template>
  <div font="[Kumbh_Sans,sans-serif]" bg="devjobs-secondary-lightgrey dark:devjobs-primary-midnight">
    <Header />

    <Wrapper>
      <WrapperContent>
        <div space="y-8 md:y-14" p="b-15.5 lg:b-26">
          <div grid="~ cols-1 md:cols-2 lg:cols-3 gap-y-12.5 md:gap-y-16.25 md:gap-x-3 lg:gap-x-7.5">
            <JobCard v-for="job in jobs" :key="job.id" :job="job" />
          </div>

          <Pagination
            v-if="data && page < data.pages"
            :loading="status === 'pending'"
            :page="data.page"
            :pages="data.pages"
            @click="onPaginationClick"
          />
        </div>
      </WrapperContent>
    </Wrapper>
  </div>
</template>
