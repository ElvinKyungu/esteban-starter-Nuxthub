// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-auth-utils', "@nuxthub/core"],
  runtimeConfig:{
    oauth: {
      github: {
        clientId:"",//Ici le fichier .env fait le job à notre place
        clientSecret:""//ici aussi
      }
    }
  },
  hub: {
    database: true,
  }
})