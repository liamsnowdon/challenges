<script lang="ts" setup>
import { useTemplateRef } from 'vue'

defineExpose({
  showModal,
  hideModal,
})

const modal = useTemplateRef('modal')

function showModal () {
  modal.value?.showModal()
}

function hideModal () {
  modal.value?.close()
}
</script>

<template>
  <dialog
    ref="modal"
    z="10"
    w="81.75"
    bg="secondary-white dark:primary-darkblue backdrop:black/50"
    rounded="md"
    @click="hideModal"
  >
    <div @click.stop>
      <slot />
    </div>
  </dialog>
</template>
