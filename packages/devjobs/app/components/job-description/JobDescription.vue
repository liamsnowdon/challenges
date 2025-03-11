<script lang="ts" setup>
import type { PropType } from 'vue'
import Button from '../button/Button.vue'
import DotSpacer from '~/components/dot-spacer/DotSpacer.vue'
import type { JobEntity } from '~~/shared/types'

defineProps({
  job: {
    type: Object as PropType<JobEntity>,
    required: true,
  },
})
</script>

<template>
  <div bg="devjobs-secondary-white dark:devjobs-primary-darkblue" p="x-6 y-10 md:12">
    <div flex="~ col md:row" items="md:center" space="y-12.5 md:y-0 md:x-7.5" m="b-8 md:b-10">
      <div flex="1">
        <DotSpacer text="devjobs-secondary-darkgrey">
          <span>{{ job.postedAt }}</span>
          <span>{{ job.contract }}</span>
        </DotSpacer>

        <h1 text="28px devjobs-primary-darkblue dark:devjobs-secondary-white" font="bold">
          {{ job.position }}
        </h1>

        <span text="devjobs-primary-violet sm" font="bold">{{ job.location }}</span>
      </div>

      <div>
        <Button w="full">
          Apply Now
        </Button>
      </div>
    </div>

    <p text="devjobs-secondary-darkgrey dark:devjobs-secondary-gray" font="leading-6.5" m="b-10">
      {{ job.description }}
    </p>

    <h2 text="xl devjobs-primary-darkblue dark:devjobs-secondary-white" font="bold" m="b-7">
      Requirements
    </h2>

    <p text="devjobs-secondary-darkgrey dark:devjobs-secondary-gray" font="leading-6.5" m="b-10">
      {{ job.requirements.content }}
    </p>

    <ul
      text="devjobs-secondary-darkgrey dark:devjobs-secondary-gray marker:devjobs-primary-violet"
      p="l-3.5"
      font="leading-6.5"
      list="disc"
      m="b-10"
    >
      <li v-for="item in job.requirements.items" :key="item" p="l-6">
        {{ item }}
      </li>
    </ul>

    <h2 text="xl devjobs-primary-darkblue dark:devjobs-secondary-white" font="bold" m="b-7">
      What You Will Do
    </h2>

    <p text="devjobs-secondary-darkgrey dark:devjobs-secondary-gray" font="leading-6.5" m="b-10">
      {{ job.role.content }}
    </p>

    <ol
      text="devjobs-secondary-darkgrey dark:devjobs-secondary-gray marker:devjobs-primary-violet"
      p="l-2"
      font="leading-6.5"
      list="decimal"
      m="b-10"
      class="[counter-reset:list-number]"
    >
      <li
        v-for="item in job.requirements.items"
        :key="item"
        p="l-7.5"
        class="[counter-increment:list-number] marker:[content:counter(list-number)] marker:font-bold"
      >
        {{ item }}
      </li>
    </ol>
  </div>
</template>
