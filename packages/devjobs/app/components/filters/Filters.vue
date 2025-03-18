<script lang="ts" setup>
import { defineModel, useTemplateRef } from 'vue'
import InputText from '../forms/input-text/InputText.vue'
import Button from '../button/Button.vue'
import InputCheckbox from '../forms/input-checkbox/InputCheckbox.vue'
import Icon from '../icon/Icon.vue'
import Modal from '../modal/Modal.vue'
import useBreakpoints from '~/composables/useBreakpoints'

const emit = defineEmits<{
  submit: []
}>()

const term = defineModel<string>('term')
const location = defineModel<string>('location')
const fullTimeOnly = defineModel<boolean>('full-time-only')

const { isDesktop } = useBreakpoints()
const filterModal = useTemplateRef('filterModal')

function openFilterModal () {
  filterModal.value?.showModal()
}

function submitFilterModal () {
  filterModal.value?.hideModal()
  emit('submit')
}
</script>

<template>
  <form
    bg="secondary-white dark:primary-darkblue"
    m="t--4 md:t--10 b-14.25 md:b-17.5 lg:b-26.25"
    grid="~ cols-1 md:cols-12"
    divide="x secondary-darkgrey/20"
    border="rounded-md"
    @submit.prevent="$emit('submit')"
  >
    <div
      grid="md:col-span-4 lg:col-span-5"
      flex="~"
      h="full"
      p="4 l-8"
      space="x-6"
    >
      <InputText
        v-model="term"
        icon="search"
        :icon-on-mobile="false"
        :placeholder="isDesktop ? 'Filter by title, companies, expertise...' : 'Filter by title...'"
      />

      <button flex="none" type="button" class="md:hidden" @click="openFilterModal">
        <Icon name="filter" />
      </button>

      <Button icon="search-white" icon-only class="md:hidden" />
    </div>

    <div grid="md:col-span-4 lg:col-span-3" h="full" p="4 l-8" class="hidden md:block">
      <InputText
        v-model="location"
        icon="location"
        placeholder="Filter by location..."
      />
    </div>

    <div
      grid="md:col-span-4 lg:col-span-4"
      items="center"
      p="4 l-8"
      space="x-6.5"
      class="hidden md:flex"
    >
      <InputCheckbox v-model="fullTimeOnly" :label="isDesktop ? 'Full Time Only' : 'Full Time'" />

      <Button type="submit" p="x-2.5 lg:x-10">
        Search
      </Button>
    </div>
  </form>

  <Modal ref="filterModal">
    <form method="dialog" @submit.prevent="submitFilterModal">
      <div p="6" border="b secondary-darkgrey/20">
        <InputText
          v-model="location"
          icon="location"
          placeholder="Filter by location..."
        />
      </div>

      <div p="6" space="y-6">
        <InputCheckbox v-model="fullTimeOnly" label="Full Time Only" />

        <Button type="submit" full-width>
          Search
        </Button>
      </div>
    </form>
  </Modal>
</template>
