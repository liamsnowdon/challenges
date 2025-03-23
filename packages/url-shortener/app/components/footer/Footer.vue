<script lang="ts" setup>
import Icon from '../icon/Icon.vue'
import Content from '../content/Content.vue'

const sections = [
  {
    title: 'Features',
    links: ['Link Shortening', 'Branded Links', 'Analytics'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Developers', 'Support'],
  },
  {
    title: 'Company',
    links: ['About', 'Our Team', 'Careers', 'Contact'],
  },
]

const socials = ['facebook', 'twitter', 'pinterest', 'instagram']
</script>

<template>
  <footer text="center lg:left" bg="palette-9" p="x-6 y-13.5 lg:y-18">
    <Content flex="~ col lg:row" items="lg:start">
      <div flex="~ 1" justify="center lg:start" m="b-12.5 lg:b-0">
        <img src="/images/logo.svg" loading="lazy" alt="Shortly logo" filter="brightness-10000">
      </div>

      <div flex="none" grid="~ cols-1 lg:cols-3 gap-10 lg:gap-19.5" m="b-12 lg:b-0 lg:r-25.25">
        <div v-for="section in sections" :key="section.title" flex="~ col">
          <span text="white" font="bold" m="b-5">{{ section.title }}</span>

          <ul space="y-2.5">
            <li v-for="link in section.links" :key="link">
              <a href="#" class="text-15px text-palette-8 hover:text-palette-6" font="medium">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div flex="~ none" justify="center" space="x-6">
        <a v-for="social in socials" :key="social" href="#">
          <Icon :name="social" filter="brightness-10000 hover:none" />
        </a>
      </div>
    </Content>
  </footer>
</template>
