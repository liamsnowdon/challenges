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
  <div flex="~" items="center" space="x-4">
    <Icon name="sun" />

    <button
      type="button"
      aria-labelledby="toggleLabel"
      pos="relative"
      flex="inline shrink-0"
      items="center"
      h="6"
      w="12"
      p="0.5"
      border="rounded-full"
      cursor="pointer"
      transition="colors ease-in-out duration-200"
      outline="focus:none"
      bg="secondary-white"
      :class="{
        'focus:ring-1 focus:ring-secondary-white ring-offset-1 ring-offset-primary-violet': true,
      }"
      @click="onClick"
    >
      <span class="sr-only">Light/Dark Mode</span>

      <span
        aria-hidden="true"
        display="inline-block"
        h="3.5"
        w="3.5"
        border="rounded-full"
        transform="~"
        ring="0"
        transition="~ ease-in-out duration-200"
        bg="primary-violet"
        :class="{
          'translate-x-27px': value,
          'translate-x-1px': !value,
        }"
      />
    </button>

    <Icon name="moon" />
  </div>
</template>
