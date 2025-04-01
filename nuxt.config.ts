import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  ssr: false,
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets/',
    head: {
      meta: [
        { property: 'og:title', content: 'Ceļu būve un inženieru tīkli Latvijā — BIMARKS' },
        { property: 'og:description', content: 'BIMARKS — pilna cikla būvniecības partneris Latvijā. Ceļu būvniecība, inženieru tīkli, labiekārtošana un BIM tehnoloģijas.' },
        { property: 'og:image', content: '/og-image.jpg' }, // Укажите путь к изображению для og:image
        { property: 'og:type', content: 'website' },
      ],
    },
  },
  site: { 
    url: 'https://bimarks.lv', 
    }, 
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
 
  modules: [
    "v-gsap-nuxt",
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
  ],
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