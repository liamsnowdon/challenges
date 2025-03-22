<script lang="ts" setup>
defineProps<{
  name: string
}>()
</script>

<template>
  <img :src="`/images/icons/${name}.svg`" loading="lazy" alt="">
</template>
