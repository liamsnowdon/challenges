<script lang="ts" setup>
import Navbar from '~/components/navbar/Navbar.vue'
import Content from '~/components/content/Content.vue'
import Hero from '~/components/hero/Hero.vue'
import Shortener from '~/components/shortener/Shortener.vue'
import Statistics from '~/components/statistics/Statistics.vue'
import Footer from '~/components/footer/Footer.vue'
</script>

<template>
  <div>
    <div p="t-10 md:t-12 b-22 md:b-17 x-6" overflow="hidden" bg="white">
      <Content>
        <Navbar />
        <Hero />
      </Content>
    </div>

    <section id="shortener" p="x-6">
      <Content>
        <Shortener />
      </Content>
    </section>

    <section p="x-6">
      <Content>
        <Statistics />
      </Content>
    </section>

    <Footer />
  </div>
</template>
