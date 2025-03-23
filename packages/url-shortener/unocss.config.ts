import {
  defineConfig,
  presetAttributify,
} from 'unocss'
import { presetWind3 } from '@unocss/preset-wind3'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
  ],

  theme: {
    colors: {
      palette: {
        1: '#34313D',
        2: '#3A3054',
        3: '#4B3F6B',
        4: '#9E9AA8',
        5: '#EFF1F7',
        6: '#2BD0D0',
        7: '#F46363',
        8: '#BFBFBF',
        9: '#232127',
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

      body {
        background-color: ${theme.colors.palette[5]};
      }
    `,
  }],
})
