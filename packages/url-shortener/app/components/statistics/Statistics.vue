<script lang="ts" setup>
import Content from '../content/Content.vue'
import Statistic from '../statistic/Statistic.vue'
</script>

<template>
  <section p="x-6" m="b-20 lg:b-30">
    <Content>
      <div max-w="135" m="x-auto b-12 lg:b-14" text="center">
        <h2 text="28px lg:40px palette-2" font="bold tracking--1px" m="b-4 lg:b-4.5">
          Advanced Statistics
        </h2>
        <p text="lg:18px palette-4" font="medium">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </div>

      <div flex="~ col justify-center items-center" p="t-11" pos="relative">
        <div
          pos="absolute"
          h="full lg:2"
          w="2 lg:full"
          m="t--11 lg:t--7"
          bg="palette-6"
        />

        <div grid="~ cols-1 lg:cols-3 gap-23 lg:gap-7.5 items-start">
          <Statistic
            icon="brand-recognition"
            title="Brand Recognition"
          >
            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
          </Statistic>
          <Statistic
            icon="detailed-records"
            title="Detailed Records"
            m="lg:t-11"
          >
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
          </Statistic>
          <Statistic
            icon="fully-customizable"
            title="Fully Customizable"
            m="lg:t-22"
          >
            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
          </Statistic>
        </div>
      </div>
    </Content>
  </section>
</template>
