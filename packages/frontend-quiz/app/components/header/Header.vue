<script lang="ts" setup>
import ColorModeToggle from '../color-mode-toggle/ColorModeToggle.vue'
import WrapperContent from '../wrapper/WrapperContent.vue'
import Logo from '../logo/Logo.vue'
import type { QuizEntity } from '~~/shared/types'

defineProps<{
  quiz?: QuizEntity
}>()
</script>

<template>
  <header
    w="full"
    p="y-6.5 x-6 md:t-13.5 md:b-11.75 md:x-16"
    bg="center cover no-repeat"
  >
    <WrapperContent
      flex="~"
      items="start"
      justify="between"
    >
      <div>
        <Logo v-if="quiz" :quiz="quiz" />
      </div>

      <ColorModeToggle />
    </WrapperContent>
  </header>
</template>
