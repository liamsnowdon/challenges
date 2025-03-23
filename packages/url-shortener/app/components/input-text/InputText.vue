<script lang="ts" setup>
import { defineModel } from 'vue'

defineProps<{
  placeholder?: string
  errorMessage?: string
}>()

defineEmits<{
  input: [Event]
}>()

const model = defineModel<string>()
</script>

<template>
  <div pos="relative" flex="1">
    <input
      v-model="model"
      type="text"
      :placeholder="placeholder"
      h="12 lg:16"
      p="x-4 lg:x-8 y-1.5 lg:y-3.5"
      bg="white"
      text="placeholder:palette-1/50 palette-1 lg:20px"
      outline="none"
      appearance="none"
      w="full"
      rounded="5px lg:10px"
      border="3 transparent"
      :class="{
        'placeholder:text-palette-7/50! border-palette-7!': errorMessage,
      }"
      @input="$emit('input', $event)"
    >

    <span
      v-if="errorMessage"
      text="palette-7"
      font="leading-4.5 medium"
      m="t-1 lg:t-2"
      pos="lg:absolute lg:bottom--6.5 lg:left-0"
      class="italic"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>
