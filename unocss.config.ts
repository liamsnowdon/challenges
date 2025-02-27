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

  theme: {
    colors: {
      advice: {
        primary: {
          cyan: 'hsl(193, 38%, 86%)',
          green: 'hsl(150, 100%, 66%)',
        },
        neutral: {
          grayishblue: 'hsl(217, 19%, 38%)',
          darkgrayishblue: 'hsl(217, 19%, 24%)',
          darkblue: 'hsl(218, 23%, 16%)',
        },
      },
    },
  },

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
