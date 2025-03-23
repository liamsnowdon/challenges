<script lang="ts" setup>
import Navbar from '~/components/navbar/Navbar.vue'
import Content from '~/components/content/Content.vue'
import Hero from '~/components/hero/Hero.vue'
import Shortener from '~/components/shortener/Shortener.vue'
import Statistics from '~/components/statistics/Statistics.vue'
import Footer from '~/components/footer/Footer.vue'
import Boost from '~/components/boost/Boost.vue'
</script>

<template>
  <div>
    <div p="t-10 md:t-12 b-22 md:b-17 x-6" overflow="hidden" bg="white">
      <Content>
        <Navbar />
        <Hero />
      </Content>
    </div>

    <Shortener />
    <Statistics />
    <Boost />
    <Footer />
  </div>
</template>
