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
      devjobs: {
        primary: {
          violet: '#5964e0',
          lightviolet: '#939bf4',
          darkblue: '#19202d',
          midnight: '#121721',
        },
        secondary: {
          white: '#ffffff',
          lightgrey: '#f4f6f8',
          gray: '#9daec2',
          darkgrey: '#6e8098',
        },
      },
    },
  },

  preflights: [{
    getCSS: ({ theme }: { theme: any }) => `
      html, body {
        height: 100%;
      }

      html {
        scroll-behavior: smooth;
      }
    `,
  }],
})
