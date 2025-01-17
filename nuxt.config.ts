// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Play: true,
        },
      },
    ],
    "nuxt-viewport",
    "vue3-carousel-nuxt",
    "@nuxt/ui",
  ],
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/thtml.ts"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    preference: "dark",
  },
});
