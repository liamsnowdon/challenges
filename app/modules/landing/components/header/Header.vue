<script lang="ts" setup>
import Wrapper from '../wrapper/Wrapper.vue'
import WrapperContent from '../wrapper/WrapperContent.vue'
import H1 from '../typography/H1.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <Wrapper border="b gray-900">
    <WrapperContent>
      <div
        flex="~ col"
        items="center"
        justify="center"
        space="y-4"
        text="center"
      >
        <div flex="~" items="center" space="x-3 md:x-4">
          <i v-if="icon" :class="icon" text="3xl md:6xl white" />
          <H1>
            {{ title }}
          </H1>
        </div>

        <p v-if="description" text="sm lg:base center">
          {{ description }}
        </p>

        <slot />
      </div>
    </WrapperContent>
  </Wrapper>
</template>
