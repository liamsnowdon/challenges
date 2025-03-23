<script lang="ts" setup>
import Button from '../button/Button.vue'
import Icon from '../icon/Icon.vue'
</script>

<template>
  <nav flex="~" items="center" justify="between">
    <div flex="~" items="center" space="x-11.25">
      <img src="/images/logo.svg" alt="Shortly logo">

      <ul space="x-7.25" class="hidden lg:flex">
        <li><a href="#" class="text-15px text-palette-4 hover:text-palette-1" font="bold">Features</a></li>
        <li><a href="#" class="text-15px text-palette-4 hover:text-palette-1" font="bold">Pricing</a></li>
        <li><a href="#" class="text-15px text-palette-4 hover:text-palette-1" font="bold">Resources</a></li>
      </ul>
    </div>

    <div items="center" space="x-9.25" class="hidden lg:flex">
      <a href="#" class="text-15px text-palette-4 hover:text-palette-1" font="bold">Login</a>

      <Button
        as="a"
        href="#"
        variant="primary"
        pill
        size="small"
      >
        Sign Up
      </Button>
    </div>

    <button type="button" class="lg:hidden">
      <Icon name="hamburger" />
    </button>
  </nav>
</template>
