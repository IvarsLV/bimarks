<template>
  <header id="header" class="absolute left-1/2 -translate-x-1/2 w-full py-3 px-6 md:px-14 lg:px-20 z-20">
    <nav class="flex justify-between items-center mt-6 xl:px-8">
      <NuxtLink :to="localePath('/')">
        <img src="/logo.png" alt="Bimarks Logo" class="w-30 sm:w-40 h-auto">
      </NuxtLink>

      <!-- Навигация для больших экранов -->
      <div class="hidden xl:flex space-x-20">
        <NuxtLink :to="localePath('/')" class="text-lg font-bold">{{ t('menu.home') }}</NuxtLink>
        <NuxtLink :to="localePath('/#about')" class="text-lg font-bold">{{ t('menu.about') }}</NuxtLink>
        <NuxtLink :to="localePath('/#services')" class="text-lg font-bold">{{ t('menu.services') }}</NuxtLink>
        <NuxtLink :to="localePath('/#contact')" class="text-lg font-bold">{{ t('menu.contact') }}</NuxtLink>
      </div>

      <!-- Переключатель языков для больших экранов -->
      <div class="hidden xl:block ">
        <LangSwitcher /> <!-- Переключатель языков для десктопа -->
      </div>

      <!-- Бургер-меню для мобильных устройств -->
      <div class="flex items-center space-x-4 xl:hidden">
        <button id="burger-button" @click="toggleMenu" class="focus:outline-none">
          <svg height="32px" id="menu-btn" class="open" viewBox="0 0 32 32">
            <path fill="white" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Мобильное меню (скрыто по умолчанию, показывается при открытии) -->
    <div 
      id="mobile-menu"
      class="xl:hidden fixed top-0 right-0 h-full w-1/2 bg-[var(--color-accent)] shadow-lg transition-opacity duration-300 ease-in-out opacity-0 visibility-hidden"
      :class="isMenuOpen ? 'opacity-100 visibility-visible' : 'opacity-0 visibility-hidden'"
    >
      <div class="flex flex-col items-start py-18 h-screen relative bg-[var(--color-accent)]">
        <!-- Кнопка закрытия внутри меню -->
        <button @click="toggleMenu" class="absolute top-4 right-4 focus:outline-none">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 6L18 18M6 18L18 6"/>
          </svg>
        </button>

        <!-- Мобильные ссылки -->
        <NuxtLink @click="toggleMenu" :to="localePath('/')" class=" text-lg w-full text-center py-4 border-b border-gray-200 block focus:bg-textPrimary focus:text-white">{{ t('menu.home') }}</NuxtLink>
        <NuxtLink @click="toggleMenu" :to="localePath('/#about')" class=" text-lg w-full text-center py-4 border-b border-gray-200 block focus:bg-textPrimary focus:text-white">{{ t('menu.about') }}</NuxtLink>
        <NuxtLink @click="toggleMenu" :to="localePath('/#services')" class=" text-lg w-full text-center py-4 border-b border-gray-200 block focus:bg-textPrimary focus:text-white">{{ t('menu.services') }}</NuxtLink>
        <NuxtLink @click="toggleMenu" :to="localePath('/#contact')" class=" text-lg w-full text-center py-4 border-b border-gray-200 block focus:bg-textPrimary focus:text-white">{{ t('menu.contact') }}</NuxtLink>
        
        <!-- Переключатель языков внутри бургер-меню -->
        <div class="mt-6 w-full flex justify-center">
          <LangSwitcher />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const localePath = useLocalePath();

// Состояние меню (открыто/закрыто)
const isMenuOpen = ref(false);

// Функция переключения состояния меню
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Функция закрытия меню при клике вне
const closeMenuOnClickOutside = (event: Event) => {
  const menu = document.getElementById("mobile-menu");
  const button = document.getElementById("burger-button");

  if (
    isMenuOpen.value &&
    menu &&
    !menu.contains(event.target as Node) &&
    button &&
    !button.contains(event.target as Node)
  ) {
    isMenuOpen.value = false;
  }
};

// Добавляем слушатель кликов при монтировании
onMounted(() => {
  document.addEventListener("click", closeMenuOnClickOutside);
});

// Убираем слушатель при размонтировании
onBeforeUnmount(() => {
  document.removeEventListener("click", closeMenuOnClickOutside);
});
</script>

<style scoped>
/* Стили для логотипа */

</style>