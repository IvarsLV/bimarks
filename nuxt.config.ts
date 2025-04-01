import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: false,

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["v-gsap-nuxt", '@nuxtjs/i18n'],

  components: [
    {
      path: "~/components",
      pathPrefix: false, // Отключает принудительный префикс
      global: true,
    },
  ],
  i18n: {
    langDir: 'locales',
    defaultLocale: 'lv',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'lv', name: 'Latviešu', file: 'lv.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' }
    ],
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

});