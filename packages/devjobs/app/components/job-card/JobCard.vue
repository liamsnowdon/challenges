<script lang="ts" setup>
import type { PropType } from 'vue'
import type { JobEntity } from '~~/shared/types'
import DotSpacer from '~/components/dot-spacer/DotSpacer.vue'

defineProps({
  job: {
    type: Object as PropType<JobEntity>,
    required: true,
  },
})
</script>

<template>
  <NuxtLink
    :to="{
      name: 'jobs-id',
      params: {
        id: job.id,
      },
    }"
    bg="secondary-white dark:primary-darkblue"
    p="x-8 b-8 t-12.25"
    flex="~ col"
    rounded="md"
    pos="relative"
  >
    <div
      flex="~"
      items="center"
      justify="center"
      h="12.5"
      w="12.5"
      border="rounded-2xl"
      pos="absolute left-8 top-0"
      transform="~ translate-y--1/2"
      :style="{
        backgroundColor: job.logoBackground,
      }"
    >
      <img :src="job.logo" :alt="`${job.company} logo`">
    </div>

    <DotSpacer text="secondary-darkgrey" m="b-4">
      <span>{{ job.postedAt }}</span>
      <span>{{ job.contract }}</span>
    </DotSpacer>

    <h2 text="primary-darkblue dark:secondary-white xl" font="bold" m="b-3">
      {{ job.position }}
    </h2>

    <span text="secondary-darkgrey" m="b-11">{{ job.company }}</span>

    <span text="primary-violet sm" font="bold">{{ job.location }}</span>
  </NuxtLink>
</template>
