<script lang="ts" setup>
import type { PropType } from 'vue'
import Button from '../button/Button.vue'
import type { JobEntity } from '~~/shared/types/devjobs'

defineProps({
  job: {
    type: Object as PropType<JobEntity>,
    required: true,
  },
})
</script>

<template>
  <div
    bg="devjobs-secondary-white dark:devjobs-primary-darkblue"
    flex="~"
    justify="center"
    border="rounded-md"
    overflow="md:hidden"
    p="b-8 x-22.5 t-12 md:0"
    pos="relative"
  >
    <div
      flex="~"
      items="center"
      justify="center"
      w="12.5 md:35"
      h="12.5 md:35"
      pos="absolute top-0 md:static"
      transform="~ translate-y--1/2 md:none"
      rounded="2xl md:none"
      :style="{
        backgroundColor: job.logoBackground,
      }"
    >
      <img :src="job.logo" :alt="`${job.company} logo`">
    </div>

    <div
      flex="~ 1 col md:row"
      items="center"
      justify="center md:start"
      space="y-6 md:y-0 md:x-4"
      text="center md:left"
      p="md:10"
    >
      <div flex="~ 1 col" space="y-2">
        <h2 text="devjobs-primary-darkblue dark:devjobs-secondary-white xl" font="bold">
          {{ job.company }}
        </h2>
        <span text="devjobs-secondary-darkgrey">{{ job.website }}</span>
      </div>

      <div>
        <Button variant="secondary" as="a" :href="job.website" target="_blank">
          Company Site
        </Button>
      </div>
    </div>
  </div>
</template>
