<script lang="ts" setup>
import { ref } from 'vue'
import InputText from '../input-text/InputText.vue'
import Button from '../button/Button.vue'
import ShortenedLink from '../shortened-link/ShortenedLink.vue'
import Content from '../content/Content.vue'

type ShortenedLink = {
  url: string
  shortenedUrl: string
}

const model = ref('')
const errorMessage = ref('')

const shortenedLinks = ref<ShortenedLink[]>([])

function onSubmit () {
  if (!model.value) {
    errorMessage.value = 'Please add a link'
    return
  }

  shortenedLinks.value.unshift({
    url: model.value,
    shortenedUrl: 'https://cleanuri.com/MD7Omm',
  })

  model.value = ''
}

function onInput () {
  errorMessage.value = ''
}
</script>

<template>
  <section id="shortener" p="x-6" m="t--21 b-20 lg:b-30">
    <Content>
      <div space="y-6">
        <form
          flex="~ col lg:row"
          space="y-4 lg:y-0 lg:x-6"
          bg="palette-2"
          p="6 lg:x-16 lg:y-13"
          rounded="10px"
          @submit.prevent="onSubmit"
        >
          <InputText
            v-model="model"
            placeholder="Shorten a link here"
            :error-message="errorMessage || undefined"
            @input="onInput"
          />
          <Button size="large" type="submit">
            Shorten It!
          </Button>
        </form>

        <div v-if="shortenedLinks.length" space="y-4 lg:y-6">
          <ShortenedLink v-for="link in shortenedLinks" :key="link.shortenedUrl" :url="link.url" :shortened-url="link.shortenedUrl" />
        </div>
      </div>
    </Content>
  </section>
</template>
