import { defineConfig } from 'windicss/helpers'
import type { PluginUtils } from 'windicss/types/interfaces'

export default defineConfig({
  plugins: [
    ({ addUtilities }: PluginUtils) => {
      addUtilities({
        '.scrollbar-styled': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },

          '&::-webkit-scrollbar-track': {
            'background': 'rgb(60,60,60)',
            'border-radius': '4px',
          },

          '&::-webkit-scrollbar-thumb': {
            'background': 'rgb(187,134,252)',
            'border-radius': '4px',
          },

          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgb(157,104,222)',
          },
        },

        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },

        '.scrollbar-default': {
          /* IE and Edge */
          '-ms-overflow-style': 'auto',

          /* Firefox */
          'scrollbar-width': 'auto',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'block',
          },
        },
      }, ['responsive'])
    },
  ],
})
