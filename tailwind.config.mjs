import defaultTheme from 'tailwindcss/defaultTheme'
import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    animations,
    ({ addComponents }) => {
      addComponents({
        '.cp-mv': {
          clipPath: 'polygon(0 0, 100% 0, 100% 95%, 50% 100%, 50% 100%, 0 95%)',
        },
        '.cp-v': {
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 50% 100%, 0 85%)',
        },
        '.cp-rmv': {
          clipPath: 'polygon(0 5%, 50% 0, 100% 5%, 100% 100%, 0 100%)',
        },
        '.cp-rv': {
          clipPath: 'polygon(0 15%, 50% 0, 100% 15%, 100% 100%, 0 100%)',
        },
      })
    },
  ],
}
