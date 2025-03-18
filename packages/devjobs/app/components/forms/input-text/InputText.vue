<script lang="ts" setup>
import { defineModel } from 'vue'
import Icon from '~/components/icon/Icon.vue'

const { iconOnMobile = true } = defineProps<{
  placeholder?: string
  icon?: string
  iconOnMobile?: boolean
}>()

const model = defineModel<string>()
</script>

<template>
  <div flex="~ 1" h="full" min-w="0">
    <Icon
      v-if="icon"
      :name="icon"
      h="6"
      self="center"
      m="r-4"
      :class="{
        'hidden md:block': !iconOnMobile,
      }"
    />

    <input
      v-model="model"
      type="text"
      :placeholder="placeholder"
      flex="1"
      bg="secondary-white dark:primary-darkblue"
      text="placeholder:primary-darkblue/50 primary-darkblue dark:placeholder:secondary-white/50 dark:secondary-white"
      outline="none"
      appearance="none"
    >
  </div>
</template>
