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
    fontSize: {
      '4xl': '2.5rem',
      '6xl': '4rem',
      '7xl': '9rem',
    },

    colors: {
      white: '#ffffff',
      black: '#000000',
      grey: {
        50: '#F4F6FA',
        500: '#626C7F',
      },
      blue: {
        50: '#EBF0FF',
        100: '#EDF1F9',
        300: '#ABC1E1',
        500: '#306AFF',
        850: '#3B4D66',
        900: '#313E51',
        950: '#2D3949',
      },
      green: {
        100: '#E0FDEF',
        500: '#2FD887',
      },
      purple: {
        100: '#F6E7FF',
        600: '#A729F5',
      },
      orange: {
        50: '#FFF5ED',
        400: '#FF7E35',
      },
      red: {
        500: '#EE5454',
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
        background-color: ${theme.colors.grey[50]};
      }

      html.dark body {
        background-color: ${theme.colors.blue[900]};
      }
    `,
  }],
})
