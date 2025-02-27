import {
  defineConfig,
  presetAttributify,
  presetIcons,
} from 'unocss'
import { presetWind3 } from '@unocss/preset-wind3'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({}),
  ],

  preflights: [{
    getCSS: () => `
      html, body, #__nuxt {
        height: 100%;
      }

      html {
        scroll-behavior: smooth;
      }
    `,
  }],
})
