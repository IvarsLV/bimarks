<template>
  <footer id="contact" class="bg-[var(--color-secondary)] text-center py-8">
    <div
      class="container px-8 md:px-12 lg:px-16 mx-auto flex flex-col md:flex-row items-center justify-between md:gap-4 xl:gap-8"
    >
      <!-- Логотип -->
      <div class="hidden lg:flex flex-col items-center w-full md:w-auto">
        <img
          src="/logofull.png"
          alt="BIMARKS Logo"
          class="w-30 md:w-40 mb-4 md:mb-0"
        />
      </div>

      <!-- Реквизиты -->
      <div class="flex flex-col items-start w-full md:w-auto text-left">
        <p>
          <strong>{{ $t("footer.name") }}:</strong> BIMARKS SIA
        </p>
        <p>
          <strong>{{ $t("footer.registrationNumber") }}:</strong> 40203622629
        </p>
        <p>
          <strong>{{ $t("footer.legalAddress") }}:</strong> Siguldas iela 6D,
          Daugavpils, LV-5404
        </p>
        <p>
          <strong>{{ $t("footer.bank") }}:</strong> BluOr Bank AS
        </p>
        <p><strong>SWIFT:</strong> CBBRLV22</p>
        <p><strong>IBAN:</strong> LV13 CBBR 112C 3943 0001 0</p>
      </div>

      <!-- Контакты -->
      <div
        class="flex flex-col items-start w-full md:w-auto gap-4 mt-4 md:mt-0"
      >
        <div class="flex flex-row gap-4">
          <p>
            <strong>{{ $t("footer.contactUs") }}</strong>
          </p>
        </div>
        <div class="flex flex-col xl:flex-row gap-4 justify-center">
          <span class="flex items-center gap-2"
            ><img src="/icons/mail.png" alt="Email" />
            <p>
              <a href="mailto:siabimarks@gmail.com" class="hover:underline"
                >siabimarks@gmail.com
              </a>
            </p></span
          >
          <span class="flex items-center gap-2"
            ><img src="/icons/mob.png" alt="Phone" />
            <p>+371 29391099</p></span
          >
        </div>
        <div class="flex flex-row justify-center">
          <p>
            <strong>{{ $t("footer.subscribe") }}</strong>
          </p>
        </div>
        <div class="flex justify-center gap-4 mb-8">
          <ul class="flex gap-4">
            <li>
              <a href="#"><img src="/icons/facebook.png" alt="Facebook" /></a>
            </li>
            <li>
              <a href="#"><img src="/icons/instagram.png" alt="Instagram" /></a>
            </li>
            <li>
              <a href="#"
                ><img src="/icons/whatsapp.png" alt="WhatsApp Business"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Разделитель -->
    <div class="border-t border-gray-200 pt-8"></div>

    <!-- Нижняя часть футера -->
    <div
      class="flex flex-col md:flex-row items-center mx-auto justify-between gap-5 container px-8 md:px-12 lg:px-16"
    >
      <p class="text-center text-sm">
        {{ $t("footer.copyright") }} &copy; {{ new Date().getFullYear() }}.
      </p>
      <a
        href="https://www.ipx.lv"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-3 py-1.5 px-3 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-300"
      >
        <div class="relative flex items-center gap-2">
          <span class="text-xs tracking-wider uppercase"
            >{{ $t("footer.createdBy") }}:</span
          >
        </div>
        <img
          src="/ipxb.svg"
          alt="IPX.SIA"
          class="h-5 w-auto transform group-hover:scale-105 transition-transform duration-300 rounded-lg"
          loading="lazy"
        />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
</script>

<style scoped></style>
