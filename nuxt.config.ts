// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {
    API_KEY: process.env.Blog_POST_API_KEY,
    public:{
      API_URL: process.env.Blog_POST_API_URL
    },
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon']
})