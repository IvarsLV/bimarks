<template>
    <a :href="href" :class="classes">
      <slot />
    </a>
  </template>
  
  <script>
  export default {
    name: "Button",
    props: {
      href: {
        type: String,
        required: true,
      },
      variant: {
        type: String,
        default: 'default',
        validator(value) {
          return ['default', 'primary', 'hero', 'white'].includes(value);
        },
      },
    },
    computed: {
      // Базовые классы
      baseClasses() {
        return 'sm:px-[20px] sm:py-[12px] px-[12px] py-[8px] rounded-md font-medium transition-colors';
      },
      // Варианты стилей
      variantClasses() {
        return {
          default: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
          primary: 'bg-[var(--color-secondary)] opacity-90 text-[20px] text-white hover:opacity-100',
          white: 'bg-white text-secondary hover:bg-gray-100',
          hero: 'bg-[var(--color-secondary)] opacity-90 text-[12px] xs:text-md md:text-lg text-white hover:opacity-100 hero-button',
        };
      },
      // Комбинируем классы
      classes() {
        return `${this.baseClasses} ${this.variantClasses[this.variant]}`;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Если нужно добавить кастомные стили для кнопки */
  </style>