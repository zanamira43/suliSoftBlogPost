// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      title: "Suly-Soft | Blog",
    }

    
  },

  runtimeConfig: {
    public:{
      API_KEY: process.env.Blog_API_KEY,
      API_URL: process.env.Blog_API_URL
    },
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon']
})
