<script setup lang="ts">
import { ref } from 'vue'
import Wrapper from './components/wrapper/Wrapper.vue'
import WrapperContent from './components/wrapper/WrapperContent.vue'
import Header from './components/header/Header.vue'
import Extension from './components/extension/Extension.vue'
import extensionsJSON from './assets/data/extensions.json'
import type { Extension as ExtensionEntity } from './types'
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Browser Extension Manager',
  description: 'Manage your browser extensions by turning them on and off, and removing them.',
})

const extensions = ref<ExtensionEntity[]>(extensionsJSON)
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <Wrapper>
      <WrapperContent>
        <Header />

        <main>
          <div grid="~ cols-1 md:cols-2 lg:cols-3 gap-3">
            <Extension v-for="extension in extensions" :key="extension.name" :extension="extension" />
          </div>
        </main>
      </WrapperContent>
    </Wrapper>
  </div>
</template>
