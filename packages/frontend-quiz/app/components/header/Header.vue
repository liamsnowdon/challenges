<script lang="ts" setup>
import ColorModeToggle from '../color-mode-toggle/ColorModeToggle.vue'
import Logo from '../logo/Logo.vue'
import Content from '~/components/content/Content.vue'
import type { QuizEntity } from '~~/shared/types'

defineProps<{
  quiz?: QuizEntity
}>()
</script>

<template>
  <header
    w="full"
    h="18 md:14"
    p="x-6 md:x-0"
    m="b-8 md:b-12.25 lg:b-21.25"
    bg="center cover no-repeat"
  >
    <Content
      h="full"
      flex="~"
      items="center"
      justify="between"
    >
      <div>
        <Logo v-if="quiz" :quiz="quiz" />
      </div>

      <ColorModeToggle />
    </Content>
  </header>
</template>
