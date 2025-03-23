<script lang="ts" setup>
import Button from '../button/Button.vue'
import Content from '~/components/content/Content.vue'
</script>

<template>
  <section p="x-6 y-23.25 lg:12.75" text="center" bg="palette-2 no-repeat cover [url(/images/backgrounds/boost-mobile.svg)] lg:[url(/images/backgrounds/boost-desktop.svg)]">
    <Content>
      <h2 text="28px lg:40px white" font="bold tracking--1px" m="b-4 lg:b-8">
        Boost your links today
      </h2>

      <Button as="a" href="#" pill>
        Get Started
      </Button>
    </Content>
  </section>
</template>
