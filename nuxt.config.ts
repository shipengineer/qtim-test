// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  tailwindcss: {
    config: {
      theme: {
        colors: {
          aquamarine: {
            1: '#9EFFBF'
          },
          black: '#101010',
          blue: { 1: '#1059C8' },
          gray: {
            1: '#232323',
            2: '#868686',
            3: '#F3F3F3',
          },
          violet: { 1: '#7941A7', 2: '#E2BEFF' },

          white: '#FFFFFF',
        }
      }
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
  ]
})