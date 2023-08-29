// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  css: ["vuetify/styles/main.sass", "@mdi/font/css/materialdesignicons.css"],

  modules: ["@pinia/nuxt"],
  build: {
    transpile: ["vuetify", "sweetalert"],
  },
});
