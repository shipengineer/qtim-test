import type { Config } from 'tailwindcss';
export default {
  theme: {
    extend: {
      colors: {
        aquamarine: {
          1: '#9EFFBF',
        },
        black: '#101010',
        blue: { 1: '#1059C8' },
        gray: {
          1: '#232323',
          2: '#868686',
          3: '#e6e6e6',
          4: '#F3F3F3',
        },
        violet: { 1: '#7941A7', 2: '#E2BEFF' },

        white: '#FFFFFF',
      },
    },
  },
  content: [
    'components/**/*.{js,vue,ts}',
    'layouts/**/*.{js,vue,ts}',
    'models/components/ui/**/*.{js,vue,ts}',
    'app.vue',
    'errors.vue',
    'pages/**/*.{js,vue,ts}',
  ],
} as Config;
