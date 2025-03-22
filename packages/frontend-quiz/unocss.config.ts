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

  shortcuts: {
    'text-preset-1': 'text-[144px] leading-none font-medium',
    'text-preset-1-mobile': 'text-[88px] leading-none font-medium',
    'text-preset-2-medium': 'text-[64px] leading-none font-medium',
    'text-preset-2-mobile-medium': 'text-[40px] leading-none font-medium',
    'text-preset-2-light': 'text-[64px] leading-none font-light',
    'text-preset-2-mobile-light': 'text-[40px] leading-none font-light',
    'text-preset-3': 'text-[36px] leading-10.75 font-medium',
    'text-preset-3-mobile': 'text-[20px] leading-6 font-medium',
    'text-preset-4': 'text-[28px] leading-none font-medium',
    'text-preset-4-mobile': 'text-[18px] leading-none font-medium',
    'text-preset-5-medium': 'text-[24px] leading-9 font-medium',
    'text-preset-5-regular': 'text-[24px] leading-9',
    'text-preset-5-mobile': 'text-[14px] leading-5.25 italic',
    'text-preset-6': 'text-[20px] leading-7.5 italic',
  },

  theme: {
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
        background: ${theme.colors.grey[50]} url('/images/pattern-backgrounds/mobile-light.svg') no-repeat center center / cover;
      }

      html.dark body {
        background: ${theme.colors.blue[900]} url('/images/pattern-backgrounds/mobile-dark.svg') no-repeat center center / cover;
      }

      @media screen and (min-width: 768px) {
        body {
          background: ${theme.colors.grey[50]} url('/images/pattern-backgrounds/tablet-light.svg') no-repeat center center / cover;
        }

        html.dark body {
          background: ${theme.colors.blue[900]} url('/images/pattern-backgrounds/tablet-dark.svg') no-repeat center center / cover;
        }
      }

      @media screen and (min-width: 1024px) {
        body {
          background: ${theme.colors.grey[50]} url('/images/pattern-backgrounds/desktop-light.svg') no-repeat center center / cover;
        }

        html.dark body {
          background: ${theme.colors.blue[900]} url('/images/pattern-backgrounds/desktop-dark.svg') no-repeat center center / cover;
        }
      }
    `,
  }],
})
