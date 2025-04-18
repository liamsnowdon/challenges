<script lang="ts" setup>
import { defineModel } from 'vue'

const model = defineModel<boolean>()

function onClick () {
  model.value = !model.value
}
</script>

<template>
  <button
    type="button"
    aria-labelledby="toggleLabel"
    pos="relative"
    flex="inline shrink-0"
    items="center"
    h="5"
    w="9"
    p="0.5"
    border="rounded-full"
    cursor="pointer"
    transition="colors ease-in-out duration-200"
    outline="focus:none"
    :bg="model ? 'red-500' : 'neutral-300 dark:neutral-600'"
    :class="{
      'focus:ring-1 focus:ring-white ring-offset-1 ring-offset-red-500': true,
    }"
    @click="onClick"
  >
    <span class="sr-only">On / Off</span>

    <span
      aria-hidden="true"
      display="inline-block"
      h="4"
      w="4"
      border="rounded-full"
      transform="~"
      ring="0"
      transition="~ ease-in-out duration-200"
      bg="neutral-0"
      :class="{
        'translate-x-4': model,
      }"
    />
  </button>
</template>
