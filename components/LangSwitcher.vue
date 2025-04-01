<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()
const router = useRouter()
// Типизируем возможные языки
type LocaleCode = 'lv' | 'en' | 'ru'
const localePath = useLocalePath()
// Функция переключения языка
const switchLanguage = async (lang: LocaleCode) => {
  setLocale(lang)
  if (process.client) {
    localStorage.setItem('userLocale', lang)
  }
  await router.push(localePath('/'))
}

</script>

<template>
<div class="flex space-x-4">
    <button 
      v-for="lang in ['en', 'lv', 'ru']" 
      :key="lang"
      @click="switchLanguage(lang as LocaleCode)"
      class="px-2 py-1 uppercase transition-all duration-200 bg-white text-[var(--color-secondary)] rounded-md text-sm font-medium hover:bg-gray-100"
      :class="{
        'font-bold': locale === lang,
        'opacity-50 hover:opacity-100': locale !== lang
      }"
    >
      {{ lang }}
    </button>
  </div>
  </template>