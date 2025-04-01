
// @ts-nocheck


export const localeCodes =  [
  "lv",
  "en",
  "ru"
]

export const localeLoaders = {
  lv: [
    {
      key: "locale_lv_46json_8d1d8244",
      load: () => import("#nuxt-i18n/8d1d8244" /* webpackChunkName: "locale_lv_46json_8d1d8244" */),
      cache: true
    }
  ],
  en: [
    {
      key: "locale_en_46json_9d40ab58",
      load: () => import("#nuxt-i18n/9d40ab58" /* webpackChunkName: "locale_en_46json_9d40ab58" */),
      cache: true
    }
  ],
  ru: [
    {
      key: "locale_ru_46json_09897917",
      load: () => import("#nuxt-i18n/09897917" /* webpackChunkName: "locale_ru_46json_09897917" */),
      cache: true
    }
  ]
}

export const vueI18nConfigs = []

export const nuxtI18nOptions = {
  restructureDir: "i18n",
  experimental: {
    localeDetector: "",
    switchLocalePathLinkSSR: false,
    autoImportTranslationFunctions: false,
    typedPages: true,
    typedOptionsAndMessages: false,
    generatedLocaleFilePathFormat: "absolute",
    alternateLinkCanonicalQueries: false,
    hmr: true
  },
  bundle: {
    compositionOnly: true,
    runtimeOnly: false,
    fullInstall: true,
    dropMessageCompiler: false,
    optimizeTranslationDirective: true
  },
  compilation: {
    strictMessage: true,
    escapeHtml: false
  },
  customBlocks: {
    defaultSFCLang: "json",
    globalSFCScope: false
  },
  locales: [
    {
      code: "lv",
      name: "Latviešu",
      files: [
        "/Users/ivarsplisko/PY_Projects/Bimarksv2/i18n/locales/lv.json"
      ]
    },
    {
      code: "en",
      name: "English",
      files: [
        "/Users/ivarsplisko/PY_Projects/Bimarksv2/i18n/locales/en.json"
      ]
    },
    {
      code: "ru",
      name: "Русский",
      files: [
        "/Users/ivarsplisko/PY_Projects/Bimarksv2/i18n/locales/ru.json"
      ]
    }
  ],
  defaultLocale: "lv",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  trailingSlash: false,
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "locales",
  rootRedirect: undefined,
  detectBrowserLanguage: {
    alwaysRedirect: false,
    cookieCrossOrigin: false,
    cookieDomain: null,
    cookieKey: "i18n_redirected",
    cookieSecure: false,
    fallbackLocale: "",
    redirectOn: "root",
    useCookie: true
  },
  differentDomains: false,
  baseUrl: "",
  customRoutes: "page",
  pages: {},
  skipSettingLocaleOnNavigate: false,
  types: "composition",
  debug: false,
  parallelPlugin: false,
  multiDomainLocales: false,
  i18nModules: []
}

export const normalizedLocales = [
  {
    code: "lv",
    name: "Latviešu",
    files: [
      {
        path: "/Users/ivarsplisko/PY_Projects/Bimarksv2/i18n/locales/lv.json",
        cache: undefined
      }
    ]
  },
  {
    code: "en",
    name: "English",
    files: [
      {
        path: "/Users/ivarsplisko/PY_Projects/Bimarksv2/i18n/locales/en.json",
        cache: undefined
      }
    ]
  },
  {
    code: "ru",
    name: "Русский",
    files: [
      {
        path: "/Users/ivarsplisko/PY_Projects/Bimarksv2/i18n/locales/ru.json",
        cache: undefined
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = true
export const hasPages = true

export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
/** client **/

/** client-end **/