<script lang="ts" setup>
import Icon from '../icon/Icon.vue'

defineProps<{
  message: string
}>()
</script>

<template>
  <div
    flex="~"
    items="center"
    justify="center"
    space="x-2"
    text="red-500"
  >
    <Icon name="error" h="8 md:10" aspect="1/1" />
    <span class="text-preset-4-mobile md:text-preset-5-regular">{{ message }}</span>
  </div>
</template>
