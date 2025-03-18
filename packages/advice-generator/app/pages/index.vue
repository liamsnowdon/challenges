<script lang="ts" setup>
import AdviceCard from '../components/advice-card/AdviceCard.vue'
import type { SlipEntity } from '../types'
import { useFetch, useHead } from '#imports'

const { data: slip, refresh } = await useFetch<SlipEntity>('https://api.adviceslip.com/advice', {
  onResponse: (value) => {
    const parsed = JSON.parse(value.response._data)

    value.response._data = parsed.slip
  },
})
</script>

<template>
  <div
    h="screen"
    bg="advice-neutral-darkblue"
    text="advice-primary-cyan"
    font="[Manrope,sans-serif]"
    flex="~ col"
    justify="center"
    items="center"
    p="4"
  >
    <AdviceCard
      v-if="slip"
      :slip="slip"
      @randomize="refresh"
    />
  </div>
</template>
