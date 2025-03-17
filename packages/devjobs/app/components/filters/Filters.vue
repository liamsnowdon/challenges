<script lang="ts" setup>
import { defineModel } from 'vue'
import InputText from '../forms/input-text/InputText.vue'
import Button from '../button/Button.vue'
import InputCheckbox from '../forms/input-checkbox/InputCheckbox.vue'

defineEmits<{
  submit: []
}>()

const term = defineModel<string>('term')
const location = defineModel<string>('location')
const fullTimeOnly = defineModel<boolean>('full-time-only')
</script>

<template>
  <form
    bg="secondary-white dark:primary-darkblue"
    m="t--4 md:t--10 b-14.25 md:b-17.5 lg:b-26.25"
    grid="~ cols-1 md:cols-3"
    divide="x secondary-darkgrey/20"
    border="rounded-md"
    @submit.prevent="$emit('submit')"
  >
    <div h="full" p="4 l-8">
      <InputText
        v-model="term"
        icon="search"
        placeholder="Filter by title, companies, expertise..."
      />

      <button type="button" />
    </div>

    <div h="full" p="4 l-8" class="hidden md:block">
      <InputText
        v-model="location"
        icon="location"
        placeholder="Filter by location..."
      />
    </div>

    <div items="center" p="4 l-8" space="x-6.5" class="hidden md:flex">
      <InputCheckbox v-model="fullTimeOnly" label="Full Time Only" />

      <Button type="submit">
        Search
      </Button>
    </div>
  </form>
</template>
