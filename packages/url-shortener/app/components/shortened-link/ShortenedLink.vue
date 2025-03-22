<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue'
import Button from '../button/Button.vue'

defineProps<{
  url: string
  shortenedUrl: string
}>()

const copied = ref(false)
const urlToCopy = useTemplateRef('urlToCopy')

function copyToClipboard () {
  if (!urlToCopy.value) {
    return
  }

  navigator.clipboard.writeText(urlToCopy.value.innerText)
  copied.value = true

  setTimeout(() => {
    copied.value = false
  }, 1000 * 2)
}
</script>

<template>
  <div
    p="md:y-4 md:r-6 md:l-8"
    bg="white"
    flex="~ col md:row"
    items="md:center"
    divide="y md:y-0 palette-4/25"
    rounded="5px"
  >
    <span flex="md:1" p="x-4 y-1.5 md:x-0 md:y-0" text="palette-1 md:20px" font="leading-9 medium">{{ url }}</span>

    <div flex="~ col md:row" items="md:center" p="x-4 y-1.5 b-4 md:0" space="y-2 md:y-0 md:x-6">
      <a
        ref="urlToCopy"
        :href="shortenedUrl"
        target="_blank"
        rel="noreferrer"
        class="text-palette-6 md:20px"
        font="medium leading-9"
      >
        {{ shortenedUrl }}
      </a>
      <Button :variant="copied ? 'secondary' : 'primary'" size="small" @click="copyToClipboard">
        {{ copied ? 'Copied!' : 'Copy' }}
      </Button>
    </div>
  </div>
</template>
