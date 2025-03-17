<script lang="ts" setup>
import { defineModel } from 'vue'
import Icon from '~/components/icon/Icon.vue'

defineProps<{
  label: string
}>()

const model = defineModel<boolean>()
</script>

<template>
  <label
    flex="~"
    items="center"
    pos="relative"
    cursor="pointer"
    class="group"
  >
    <input
      v-model="model"
      type="checkbox"
      pos="absolute"
      op="0"
      class="peer"
    >

    <span
      flex="~ none"
      items="center"
      justify="center"
      z="1"
      w="6"
      h="6"
      bg="secondary-white/10 group-hover:primary-violet/25 !peer-checked:primary-violet"
      rounded="3px"
      m="r-4"
      text="secondary-white"
    >
      <Icon v-show="model" name="check" />
    </span>

    <span text="secondary-white" font="bold">{{ label }}</span>
  </label>
</template>
