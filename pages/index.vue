<template>

<section id="home" class="relative text-center bg-[url('/herobg.png')] xl:bg-[0%_40%] xl:bg-[length:111%_auto] lg:bg-[25%_40%] lg:bg-[length:190%_auto] md:bg-[length:220%_auto] md:bg-[position:30%_10%] bg-[length:365%_auto] bg-[position:45%_30%] bg-no-repeat min-h-screen min-w-screen overflow-hidden">
  <div class="absolute inset-0 bg-black/10 z-0"></div>
  <div class="absolute inset-0 bg-gradient-animation"></div>
  
  <div class="absolute left-1/2 -translate-x-1/2 container px-6 sm:px-10 md:px-20 lg:px-20 flex items-center min-h-screen z-0">
    <div class="flex flex-col text-left justify-between items-start gap-[20px] sm:gap-[40px] w-full">
      <h1 class="hero-title  text-[40px] sm:text-[60px] md:text-[76px] font-bold leading-[110%] uppercase">
        {{ t('hero.title1') }} <br />  {{ t('hero.title2') }}
      </h1>
      <p class="hero-subtitle text-[14px] sm:text-[20px] font-semibold w-2/3">
        {{ t('hero.subtitle') }}
      </p>
      <Button href="#contact" variant="hero" class=" px-4 py-2 mt-4">
        {{ t('hero.button') }}
      </Button>
    </div> 
  </div>
</section>

<section id="about" class="py-25 bg-[var(--color-accent)] relative">
  <!-- Водяной знак -->
  <div class="absolute top-0 right-0 lg:top-15 lg:right-60 opacity-25 w-40 lg:w-80 h-80 z-0 pointer-events-none watermark">
    <img src="/icons/about.png" alt="" class="w-full h-full object-contain" />
  </div>
  
  <div class="container px-6 sm:px-10 md:px-20 lg:px-20 mx-auto flex flex-col items-center">
    <h5 class="text-center uppercase mb-5 about-title">{{ t('about.title') }}</h5>
    <h3 class="font-semibold text-center mb-8 lg:mb-15 uppercase about-subtitle">{{ t('about.subtitle') }}</h3>

    <div class="flex flex-col items-start justify-between w-full">
      <p class="about-text">{{ t('about.text1') }}</p>
      <p class="mt-4 about-text">{{ t('about.text2') }}</p>
      <p class="mt-4 about-text">{{ t('about.text3') }}</p>
      <p class="mt-4 about-text">{{ t('about.text4') }}</p>

      <!-- Карточки преимуществ -->
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-15">
        <!-- Карточка 1 -->
        <div class="p-6 bg-white/90 shadow-lg rounded-lg flex flex-col items-center text-center hover:scale-103 hover:shadow-xl transition-transform gap-4 about-card">
          <img src="/icons/technology.svg" alt="Современные технологии" class="w-15 h-15">
          <h4 class="text-xl text-[var(--color-background)] font-semibold">{{ t('about.card1Title') }}</h4>
          <p class="text-sm text-gray-600">{{ t('about.card1Text') }}</p>
        </div>

        <!-- Карточка 2 -->
        <div class="p-6 bg-white/90 shadow-lg rounded-lg flex flex-col items-center text-center hover:scale-103 hover:shadow-xl transition-transform gap-4 about-card">
          <img src="/icons/time.svg" alt="Оперативность и сроки" class="w-15 h-15">
          <h4 class="text-xl font-semibold text-[var(--color-background)]">{{ t('about.card2Title') }}</h4>
          <p class="text-sm text-gray-600">{{ t('about.card2Text') }}</p>
        </div>

        <!-- Карточка 3 -->
        <div class="p-6 bg-white/90 shadow-lg rounded-lg flex flex-col items-center text-center hover:scale-103 hover:shadow-xl transition-transform gap-4 about-card">
          <img src="/icons/specialist.svg" alt="Опытные специалисты" class="w-15 h-15">
          <h4 class="text-xl font-semibold text-[var(--color-background)]">{{ t('about.card3Title') }}</h4>
          <p class="text-sm text-gray-600">{{ t('about.card3Text') }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="services" class=" py-12 lg:py-25 relative">
  <!-- Водяной знак -->
  <div class="absolute top-0 right-0 lg:top-15 lg:right-60 opacity-25 w-40 lg:w-80 h-80 z-0 pointer-events-none watermark">
    <img src="/icons/services.png" alt="" class="w-full h-full object-contain" />
  </div>

  <div class="relative container px-6 sm:px-10 md:px-20 lg:px-20 mx-auto flex flex-col justify-center lg:gap-0 items-center">
    <h5 class="text-center uppercase mb-5 services-title">{{ t('services.title') }}</h5>
    <h3 class="text-center font-semibold uppercase services-subtitle">{{ t('services.subtitle') }}</h3>

    <!-- CD -->
    <div class="flex flex-col lg:flex-row justify-between items-center w-full mt-15 cd-card">
      <div class="w-full lg:w-1/2 h-[250px] lg:min-h-[710px] bg-[var(--color-secondary)] flex items-center justify-center transition-all duration-500  lg:rounded-tl-lg relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <img src="/cd.png" class="parallax-img w-full h-full object-cover" style="will-change: transform;" alt="" />
        </div>
      </div>
      <div class="w-full lg:w-1/2 lg:min-h-[710px] min-h-[510px] bg-[var(--color-secondary)] flex flex-col items-center justify-items-start lg:justify-center px-3 py-6 gap-4 lg:py-0 lg:px-8 lg:gap-0  lg:rounded-tr-lg">
        <h3>{{ t('services.cdTitle') }}</h3>
        <p class="tracking-wider lg:mt-4">
          {{ t('services.cdText1') }}<br><br>
          {{ t('services.cdText2') }}
        </p>
      </div>
    </div>

    <!-- LKT ELT -->
    <div class="flex flex-col-reverse lg:flex-row justify-between items-center w-full lkt-card">
      <div class="w-full lg:w-1/2 lg:min-h-[710px] min-h-[510px] bg-[var(--color-background)] flex flex-col items-center justify-items-start lg:justify-center px-3 py-6 gap-4 lg:py-0 lg:px-8 lg:gap-0">
        <h3>{{ t('services.lktTitle') }}</h3>
        <p class="tracking-wider lg:mt-4">
          {{ t('services.lktText1') }}<br><br>
          {{ t('services.lktText2') }}
        </p>
      </div>
      <div class="w-full lg:w-1/2 h-[250px] lg:min-h-[710px] bg-[var(--color-background)] flex items-center justify-center transition-all duration-500 relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <img src="/lkt.png" class="parallax-img w-full h-full object-cover" style="will-change: transform;" alt="" />
        </div>
      </div>
    </div>

    <!-- LAB -->
    <div class="flex flex-col lg:flex-row justify-between items-center w-full lab-card">
      <div class="w-full lg:w-1/2 h-[250px] lg:min-h-[710px] bg-[var(--color-accent)] flex items-center justify-center transition-all duration-500 lg:rounded-bl-lg relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
          <img src="/lab.png" class="parallax-img w-full h-full object-cover" style="will-change: transform;" alt="" />
        </div>
      </div>
      <div class="w-full lg:w-1/2 lg:min-h-[710px] min-h-[510px] bg-[var(--color-accent)] flex flex-col items-center justify-items-start lg:justify-center px-3 py-6 gap-4 lg:py-0 lg:px-8 lg:gap-0 lg:rounded-br-lg">
        <h3>{{ t('services.labTitle') }}</h3>
        <p class="tracking-wider lg:mt-4">
          {{ t('services.labText1') }}<br><br>
          {{ t('services.labText2') }}
        </p>
      </div>
    </div>
  </div>
</section>

  

<div id="scrollTopBtn" class="fixed bottom-10 right-10 lg:bottom-10 lg:right-25 z-50 opacity-0 pointer-events-none cursor-pointer bg-white text-[var(--color-accent)] p-3 rounded-full shadow-lg transition-opacity duration-300">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
  </svg>
</div>
</template>

<script setup>
import gsapAnimations from '~/assets/js/gsapAnimations'
import { onMounted } from 'vue'

const { t } = useI18n()

onMounted(() => {
  gsapAnimations.setup()
})
</script>

<style>
@keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-gradient-animation {
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #40122C, #083643, #008460,#083643, #40122C );
  background-size: 300% 300%;
  animation: gradientAnimation 12s ease infinite;
  opacity: 0.30;
  z-index: 0;
}

.parallax-img {
  will-change: transform;
}
</style>
