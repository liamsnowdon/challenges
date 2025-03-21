<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../icon/Icon.vue'
import { useColorMode } from '#imports'

const colorMode = useColorMode()

const value = computed(() => {
  return colorMode.value === 'dark'
})

function onClick () {
  const newValue = value.value ? 'light' : 'dark'

  colorMode.preference = newValue
}
</script>

<template>
  <div flex="~" items="center" space="x-2 md:x-4">
    <Icon :name="value ? 'sun-light' :'sun-dark'" h="4 md:6" />

    <button
      type="button"
      aria-labelledby="toggleLabel"
      pos="relative"
      flex="inline shrink-0"
      items="center"
      h="5 md:7"
      w="8 md:12"
      p="1"
      border="rounded-full"
      cursor="pointer"
      transition="colors ease-in-out duration-200"
      outline="focus:none"
      bg="purple-600"
      :class="{
        'focus:ring-1 focus:ring-white ring-offset-1 ring-offset-purple-600': true,
      }"
      @click="onClick"
    >
      <span class="sr-only">Light/Dark Mode</span>

      <span
        aria-hidden="true"
        display="inline-block"
        h="3 md:5"
        w="3 md:5"
        border="rounded-full"
        transform="~"
        ring="0"
        transition="~ ease-in-out duration-200"
        bg="white"
        :class="{
          'translate-x-12px md:translate-x-20px': value,
        }"
      />
    </button>

    <Icon :name="value ? 'moon-light' :'moon-dark'" h="4 md:6" />
  </div>
</template>
