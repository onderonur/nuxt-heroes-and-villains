// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["nuxt-icon", "@nuxtjs/tailwindcss"],
  components: {
    dirs: [{ path: "~/components/", pathPrefix: false }],
  },
});
