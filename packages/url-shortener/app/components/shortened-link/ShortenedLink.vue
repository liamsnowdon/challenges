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
    p="lg:y-4 lg:r-6 lg:l-8"
    bg="white"
    flex="~ col lg:row"
    items="lg:center"
    divide="y lg:y-0 palette-4/25"
    rounded="5px"
    space="lg:x-6"
  >
    <span
      flex="lg:1"
      p="x-4 y-1.5 lg:x-0 lg:y-0"
      text="palette-1 lg:20px"
      break="words"
      font="leading-9 medium"
      min-w="0"
    >{{ url }}</span>

    <div flex="~ col lg:row" items="lg:center" p="x-4 y-1.5 b-4 lg:0" space="y-2 lg:y-0 lg:x-6">
      <a
        ref="urlToCopy"
        :href="shortenedUrl"
        target="_blank"
        rel="noreferrer"
        class="text-palette-6 lg:20px"
        font="medium leading-9"
      >
        {{ shortenedUrl }}
      </a>
      <Button :variant="copied ? 'secondary' : 'primary'" size="small" w="lg:25.75" @click="copyToClipboard">
        {{ copied ? 'Copied!' : 'Copy' }}
      </Button>
    </div>
  </div>
</template>
