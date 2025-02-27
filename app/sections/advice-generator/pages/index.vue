<script lang="ts" setup>
import { useFavicon } from '@vueuse/core'
import AdviceCard from '../components/advice-card/AdviceCard.vue'
import type { SlipEntity } from '../types'
import { useFetch, useHead } from '#imports'

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap' },
  ],
})

useFavicon().value = 'advice-generator.png'

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
