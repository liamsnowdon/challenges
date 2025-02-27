<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Challenge } from '../../types'

defineProps({
  challenge: {
    type: Object as PropType<Challenge>,
    required: true,
  },
})
</script>

<template>
  <NuxtLink
    :to="{ name: challenge.slug }"
    bg="gray-900"
    rounded="2xl"
    overflow="hidden"
    pos="relative"
  >
    <div pos="relative">
      <img
        :src="`/images/challenges/${challenge.slug}/thumbnail.jpg`"
        :alt="`${challenge.name} thumbnail`"
        loading="lazy"
        w="full"
      >
    </div>

    <div p="3 md:4" flex="~ col" space="y-1">
      <h2 text="truncate white lg" font="bold">
        {{ challenge.name }}
      </h2>
      <p>
        {{ challenge.intro }}
      </p>
    </div>
  </NuxtLink>
</template>
