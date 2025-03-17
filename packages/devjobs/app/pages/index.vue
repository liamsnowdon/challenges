<script lang="ts" setup>
import { ref } from 'vue'
import Header from '../components/header/Header.vue'
import JobCard from '../components/job-card/JobCard.vue'
import Wrapper from '../components/wrapper/Wrapper.vue'
import WrapperContent from '../components/wrapper/WrapperContent.vue'
import Pagination from '../components/pagination/Pagination.vue'
import Filters from '~/components/filters/Filters.vue'
import { useAsyncData } from '#imports'
import type { JobEntity } from '~~/shared/types'

const term = ref('')
const location = ref('')
const fullTimeOnly = ref(false)

const page = ref(0)
const jobs = ref<JobEntity[]>([])

const { data, status } = await useAsyncData(`jobs`, async () => {
  const response = await $fetch('/api/jobs', {
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

function onFiltersSubmit () {
  console.log('Submit!')
}
</script>

<template>
  <div>
    <Header />

    <Wrapper>
      <WrapperContent>
        <Filters
          v-model:term="term"
          v-model:location="location"
          v-model:full-time-only="fullTimeOnly"
          @submit="onFiltersSubmit"
        />

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
