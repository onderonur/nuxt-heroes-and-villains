// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["nuxt-icon", "@nuxtjs/tailwindcss"],
  components: {
    dirs: [{ path: "~/components/", pathPrefix: false }],
  },
  app: {
    // For GitHub Pages
    baseURL: "/nuxt-heroes-and-villains/",
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          // Added repository name to show favicon on GitHub Pages
          href: "/nuxt-heroes-and-villains/favicon.ico",
        },
      ],
    },
  },
});
