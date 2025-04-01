<script setup lang="ts">
import { useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import { watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const { t, locale } = useI18n()
const router = useRouter()
const localePath = useLocalePath()

type LocaleCode = 'en' | 'lv' | 'ru'

const loadLocale = (lang: LocaleCode) => {
  try {
    const messages = require(`~/locales/${lang}.json`)
    locale.value = lang
    console.log(`Locale loaded: ${lang}`);
  } catch (error) {
    console.error('Failed to load locale:', lang, error)
  }
}

const updateMetaTags = () => {
  const lang = locale.value

  useHead({
    title: t('meta.title'),
    meta: [
      { name: 'description', content: t('meta.description') },
      { property: 'og:title', content: t('meta.title') },
      { property: 'og:description', content: t('meta.description') },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${window.location.origin}${localePath('/')}` },
      { property: 'og:image', content: '/og-image.jpg' } // Желательно сделать универсальное изображение (1200×630px)
    ],
    link: [
      { rel: 'alternate', hreflang: lang, href: `${window.location.origin}${localePath('/')}` },
      { rel: 'canonical', href: `${window.location.origin}${localePath('/')}` }
    ]
  })
}

onMounted(() => {
  const pathLocale = router.currentRoute.value.path.split('/')[1] as LocaleCode
  const savedLocale = localStorage.getItem('userLocale') as LocaleCode

  if (pathLocale && pathLocale !== locale.value) {
    loadLocale(pathLocale)
    localStorage.setItem('userLocale', pathLocale)
  } else if (savedLocale && savedLocale !== locale.value) {
    loadLocale(savedLocale)
  }

  updateMetaTags()
})

watch(locale, updateMetaTags)
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
    <Header />
    <main class="flex-1 mx-auto w-full">
      <slot />
    </main>
    <Footer />
  </div>
</template>