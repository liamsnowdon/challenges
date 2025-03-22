<script lang="ts" setup>
import Icon from '../icon/Icon.vue'

defineProps<{
  icon: string
}>()
</script>

<template>
  <div
    flex="~ none"
    items="center"
    justify="center"
    w="10 md:14"
    h="10 md:14"
    rounded="lg"
    :class="{
      'bg-orange-50': icon === 'html',
      'bg-green-100': icon === 'css',
      'bg-blue-50': icon === 'js',
      'bg-purple-100': icon === 'accessibility',
    }"
  >
    <Icon :name="icon" h="7 md:10" />
  </div>
</template>
