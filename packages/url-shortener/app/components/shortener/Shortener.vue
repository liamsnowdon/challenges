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
const shortenedLinks = ref<ShortenedLink[]>(JSON.parse(localStorage.getItem('url-shortener.links') || '[]'))

async function onSubmit () {
  if (!model.value) {
    errorMessage.value = 'Please add a link'
    return
  }

  try {
    const response = await $fetch('/api/shorten', {
      method: 'post',
      body: {
        url: model.value,
      },
    })

    if ('result_url' in response) {
      shortenedLinks.value.unshift({
        url: model.value,
        shortenedUrl: response.result_url,
      })

      model.value = ''
    }

    localStorage.setItem('url-shortener.links', JSON.stringify(shortenedLinks.value))
  } catch (e: any) {
    if (e.data.message) {
      errorMessage.value = e.data.message
    }
  }
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
          p="6 lg:x-16 lg:y-13"
          rounded="10px"
          bg="palette-2 no-repeat cover"
          class="bg-[url(/images/backgrounds/shorten-mobile.svg)] lg:bg-[url(/images/backgrounds/shorten-desktop.svg)]"
          @submit.prevent="onSubmit"
        >
          <InputText
            v-model="model"
            placeholder="Shorten a link here..."
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
