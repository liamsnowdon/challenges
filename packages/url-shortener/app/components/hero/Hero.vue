<script lang="ts" setup>
import Button from '../button/Button.vue'
</script>

<template>
  <header grid="~ cols-1 md:cols-2 gap-9 md:gap-0" items="center" p="t-6 md:t-19.5 b-9 md:b-17" text="center md:left">
    <img
      src="/images/illustration-working.svg"
      alt="Illustration"
      max-w="none"
      transform="~ md:translate-x-22.5"
      order="md:2"
      h="84.25 md:120.5"
    >

    <div order="md:1">
      <h1 text="42px md:80px palette-1" font="bold" leading="12 md:22.5" m="b-3.75 md:b-1.25">
        More than just shorter links
      </h1>

      <p text="18px md:22px palette-4" font="leading-7.5 md:leading-9 medium" m="b-8 md:b-9.5">
        Build your brand's recognition and get detailed insights on how your links are performing.
      </p>

      <Button as="a" href="#shortener" pill>
        Get Started
      </Button>
    </div>
  </header>
</template>
