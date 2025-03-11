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
    getCSS: ({ theme }: { theme: any }) => `
      html, body {
        height: 100%;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        background-color: ${theme.colors.gray[950]};
        color: ${theme.colors.gray[400]};
      }
    `,
  }],
})
