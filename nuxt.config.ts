// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-16',

  modules: ['nuxt-icon', '@nuxtjs/tailwindcss'],

  components: {
    dirs: [{ path: '~/components/', pathPrefix: false }],
  },

  app: {
    // https://nuxt.com/docs/getting-started/transitions
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
});
