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
      neutral: {
        900: 'hsl(227, 75%, 14%)',
        800: 'hsl(226, 25%, 17%)',
        700: 'hsl(225, 23%, 24%)',
        600: 'hsl(226, 11%, 37%)',
        300: 'hsl(0, 0%, 78%)',
        200: 'hsl(217, 61%, 90%)',
        100: 'hsl(0, 0%, 93%)',
        0: 'hsl(200, 60%, 99%)',
      },
      red: {
        700: 'hsl(3, 77%, 44%)',
        500: 'hsl(3, 71%, 56%)',
        400: 'hsl(3, 86%, 64%)',
      },
      gradient: {
        'light-from': '#EBF2FC',
        'light-to': '#EEF8F9',
        'dark-from': '#040918',
        'dark-to': '#091540',
      },
    },
  },
})
