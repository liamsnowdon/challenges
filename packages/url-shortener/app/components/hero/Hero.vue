<script lang="ts" setup>
import Button from '../button/Button.vue'
</script>

<template>
  <header grid="~ cols-1 lg:cols-2 gap-9 lg:gap-0" items="center" p="t-6 lg:t-19.5 b-9 lg:b-17" text="center lg:left">
    <img
      src="/images/illustration-working.svg"
      alt="Illustration"
      max-w="none"
      transform="~ lg:translate-x-22.5"
      order="lg:2"
      h="84.25 lg:120.5"
    >

    <div order="lg:1">
      <h1 text="42px lg:80px palette-1" font="bold" leading="12 lg:22.5" m="b-3.75 lg:b-1.25">
        More than just shorter links
      </h1>

      <p text="18px lg:22px palette-4" font="leading-7.5 lg:leading-9 medium" m="b-8 lg:b-9.5">
        Build your brand's recognition and get detailed insights on how your links are performing.
      </p>

      <Button as="a" href="#shortener" pill>
        Get Started
      </Button>
    </div>
  </header>
</template>
