<script lang="ts" setup>
import Button from '../button/Button.vue'

defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits<{
  click: []
}>()

function onClick () {
  emit('click')
}
</script>

<template>
  <div flex="~" justify="center" w="full">
    <Button size="large" :loading="loading" @click="onClick">
      Load More
    </Button>
  </div>
</template>
