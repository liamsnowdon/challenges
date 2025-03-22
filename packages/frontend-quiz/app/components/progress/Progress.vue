<script lang="ts" setup>
defineProps<{
  percentage: number
}>()
</script>

<template>
  <div h="4" bg="white dark:blue-850" p="1" rounded="full">
    <div
      h="full"
      bg="purple-600"
      rounded="full"
      transition="width duration-200"
      :style="{
        width: `${percentage}%`,
      }"
    />
  </div>
</template>
