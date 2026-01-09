<template>
  <section v-scroll-reveal="'fade-up'" class="container relative mx-auto w-full min-h-200 flex flex-col py-16 gap-20">
    <div class="group flex w-fit gap-6 items-end text-9xl cursor-pointer" @click="router.push('/portfolio')">
      <h2>Портфолио</h2>
      <div>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current size-20 group-hover:translate-x-2 transition-all duration-300"
        >
          <path
            d="M18 9.6875L11.5312 3.125C11.25 2.84375 10.8125 2.84375 10.5312 3.125C10.25 3.40625 10.25 3.84375 10.5312 4.125L15.7812 9.46875H2.5C2.125 9.46875 1.8125 9.78125 1.8125 10.1562C1.8125 10.5312 2.125 10.875 2.5 10.875H15.8437L10.5312 16.2813C10.25 16.5625 10.25 17 10.5312 17.2813C10.6562 17.4063 10.8437 17.4688 11.0312 17.4688C11.2187 17.4688 11.4062 17.4062 11.5312 17.25L18 10.6875C18.2812 10.4062 18.2812 9.96875 18 9.6875Z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>

    <p v-scroll-reveal="'fade-up'" class="absolute top-80 right-10 max-w-xl text-3xl font-medium pointer-events-none">
      Разрабатываем визуальные решения, объединяя креативный подход с современными технологиями и гибкой системой
      применения
      <span class="absolute -top-10 -right-8 -rotate-1990 text-7xl">
          ✨
        </span>
      <span class="absolute -bottom-25 -left-25 -rotate-90 text-9xl">
          🚀
        </span>
    </p>
    <div class="flex flex-col justify-start items-start gap-12">
      <div
        v-for="(item, index) in portfolio"
        :key="item.title"
        v-scroll-reveal="'fade-up'"
        :style="`align-self: ${index % 2 === 0 ? 'flex-start' : 'flex-end'}`"
        class="group flex flex-col gap-7 w-1/2"
      >
        <div class="relative w-full min-h-125 group-hover:scale-105 transition-transform duration-300">
          <img
            v-for="image in item.images"
            :key="image.name"
            :src="`src/assets/images/portfolio/${image.src}.png`"
            :alt="image.name"
            :class="[
                image.classes,
                'object-cover'
            ]"
          >
        </div>

        <p class="text-4xl text-[#8d8d8d] group-hover:text-white transition-colors duration-300">
          {{ item.title }} — {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import router from "@/router";
import {ref} from "vue";

const portfolio = ref([
  {
    images: [
      {
        src: 'designSocials/iceCream-desktop',
        name: 'iceCream-desktop',
        classes: 'absolute top-0 left-0 w-full h-125'
      },
      {
        src: 'designSocials/iceCream-mobile',
        name: 'iceCream-mobile',
        classes: 'absolute -bottom-10 -right-10 z-1 max-h-120 h-120'
      },
    ],
    title: 'Дизайн соцсетей',
    description: 'визуальная система постов и сторис, которая делает бренд узнаваемым и цельным в ленте'
  },
  {
    images: [
      {
        src: '3dDesign/3d-desktop',
        name: '3d-desktop',
        classes: 'absolute top-0 left-0 w-full h-125'
      },
      {
        src: '3dDesign/3d-mobile',
        name: '3d-mobile',
        classes: 'absolute -bottom-10 -left-40 z-1 max-h-120 h-120'
      },
    ],
    title: 'Рекламные креативы для соцсетей',
    description: 'баннеры, которые быстро доносят оффер и повышают кликабельность'
  },
  {
    images: [
      {
        src: 'videoPreview/preview-desktop',
        name: 'preview-desktop',
        classes: 'absolute top-0 left-0 w-full h-125'
      },
      {
        src: 'videoPreview/preview-mobile',
        name: 'preview-mobile',
        classes: 'absolute -top-5 -right-30 z-1 max-h-120 h-120'
      },
    ],
    title: 'Превью для видео',
    description: 'обложки, которые выделяются в рекомендациях и увеличивают CTR видео'
  },
  {
    images: [
      {
        src: 'ecomCards/oil-desktop',
        name: 'oil-desktop',
        classes: 'absolute top-0 left-0 w-full h-125'
      },
      {
        src: 'ecomCards/oil-mobile',
        name: 'oil-mobile',
        classes: 'absolute -bottom-10 -right-10 z-1 max-h-120 h-120'
      },
      {
        src: 'ecomCards/air-fryer-mobile',
        name: 'air-fryer-mobile',
        classes: 'absolute -top-10 -left-40 z-1 max-h-120 h-120'
      },
    ],
    title: 'Карточки товаров для маркетплейсов',
    description: 'визуал, который понятно показывает преимущества и помогает продавать'
  },
  {
    images: [
      {
        src: 'designPackges/package-desktop',
        name: 'package-desktop',
        classes: 'absolute top-0 left-0 w-full h-125'
      },
      {
        src: 'designPackges/mini-package-red',
        name: 'mini-package-red',
        classes: 'absolute top-30 -right-30 -rotate-15 h-60'
      },
      {
        src: 'designPackges/mini-package-green',
        name: 'mini-package-green',
        classes: 'absolute -top-15 -left-15 -rotate-15 h-60'
      },
      {
        src: 'designPackges/mini-package-purple',
        name: 'mini-package-purple',
        classes: 'absolute -bottom-5 -left-15 rotate-15 h-60'
      },
    ],
    title: 'Дизайн упаковки',
    description: 'этикетки и коробки, которые усиливают бренд и работают на полке и в онлайне'
  }
])
</script>
