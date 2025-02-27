<script lang="ts" setup>
import type { PropType } from 'vue'
import type { SlipEntity } from '../../types'

defineProps({
  slip: {
    type: Object as PropType<SlipEntity>,
    required: true,
  },
})

defineEmits<{
  randomize: []
}>()
</script>

<template>
  <div
    flex="~ col"
    items="center"
    justify="center"
    bg="advice-neutral-darkgrayishblue"
    p="t-8 x-8 b-14"
    rounded="2xl"
    text="center"
    max-w="508px"
    pos="relative"
  >
    <span text="advice-primary-green xs" font="tracking-2px" class="uppercase" m="b-4">Advice #{{ slip.id }}</span>

    <p font="800" text="advice-primary-cyan 28px" m="b-6">
      "{{ slip.advice }}"
    </p>

    <img class="hidden md:block" src="/images/challenges/advice-generator/pattern-divider-desktop.svg">
    <img class="block md:hidden" src="/images/challenges/advice-generator/pattern-divider-mobile.svg">

    <button
      w="14"
      h="14"
      flex="~"
      items="center"
      justify="center"
      bg="advice-primary-green"
      shadow="hover:2xl advice-primary-green"
      rounded="full"
      pos="absolute bottom-0"
      transform="~ translate-y-1/2"
      @click="$emit('randomize')"
    >
      <img src="/images/challenges/advice-generator/icon-dice.svg">
    </button>
  </div>
</template>
