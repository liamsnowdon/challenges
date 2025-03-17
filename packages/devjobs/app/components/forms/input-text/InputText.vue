<script lang="ts" setup>
import { defineModel } from 'vue'
import Icon from '~/components/icon/Icon.vue'

defineProps<{
  placeholder?: string
  icon?: string
}>()

const model = defineModel<string>()
</script>

<template>
  <div flex="~" space="x-4" h="full">
    <Icon v-if="icon" :name="icon" h="6" self="center" />

    <input
      v-model="model"
      type="text"
      :placeholder="placeholder"
      bg="secondary-white dark:primary-darkblue"
      text="placeholder:primary-darkblue/50 primary-darkblue dark:placeholder:secondary-white/50 dark:secondary-white"
      outline="none"
      appearance="none"
    >
  </div>
</template>
