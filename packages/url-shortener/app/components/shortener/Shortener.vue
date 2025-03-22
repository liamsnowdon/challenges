<script lang="ts" setup>
import { ref } from 'vue'
import InputText from '../input-text/InputText.vue'
import Button from '../button/Button.vue'
import ShortenedLink from '../shortened-link/ShortenedLink.vue'

const link = ref('')
</script>

<template>
  <div space="y-6">
    <div
      flex="~ col md:row"
      space="y-4 md:y-0 md:x-6"
      bg="palette-2"
      p="6 md:x-16 md:y-13"
      rounded="10px"
    >
      <InputText v-model="link" placeholder="Shorten a link here" />
      <Button size="large">
        Shorten It!
      </Button>
    </div>

    <div v-if="true" space="y-4 md:y-6">
      <ShortenedLink url="https://www.frontendmentor.io" shortened-url="https://rel.ink/k4lKy" />
      <ShortenedLink url="https://twitter.com/frontendmentor" shortened-url="https://rel.ink/gxOXp9" />
      <ShortenedLink url="https://www.linkedin.com/compan…" shortened-url="https://rel.ink/gob3X9" />
    </div>
  </div>
</template>
