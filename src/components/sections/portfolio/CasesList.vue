<template>
  <section v-scroll-reveal="'fade-up'" class="container relative mx-auto w-full min-h-200 flex flex-col py-16 gap-20">
    <div class="flex flex-col items-start gap-60">
      <div
        v-for="(item, index) in portfolio"
        :key="item.title"
        v-scroll-reveal="'fade-up'"
        class="flex gap-40 w-full"
        :style="`flex-direction: ${index % 2 === 0 ? 'row' : 'row-reverse'}`"
      >
        <div class="relative min-w-3/6 w-full min-h-125">
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

        <div class="flex flex-col gap-6 min-w-1/6 w-full pt-20">
          <h4 class="text-6xl font-semibold">
            {{ item.title }}
          </h4>

          <div class="flex items-center gap-2 flex-wrap">
            <Badge
              v-for="badge in item.badges"
              :key="badge.id"
              class="w-fit"
            >
              {{ badge.title }}
            </Badge>
          </div>

          <p class="text-2xl">
            {{ item.subtitle }}
          </p>

          <p>
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Badge} from "primevue";

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
        classes: 'absolute -bottom-0 -right-0 z-1 max-h-120 h-120'
      },
    ],
    badges: [
      {
        id: 1,
        title: 'Figma'
      },
      {
        id: 2,
        title: 'Photoshop'
      },
      {
        id: 3,
        title: 'Illustrator'
      },
      {
        id: 4,
        title: 'Midjourney'
      },
      {
        id: 5,
        title: 'DALL·E'
      },
      {
        id: 6,
        title: 'Stable Diffusion'
      },
      {
        id: 7,
        title: 'ChatGPT'
      },
    ],
    title: 'Дизайн соцсетей',
    subtitle: 'Дизайн соцсетей — системный визуал для брендов и продуктов',
    description: 'Разработка визуального контента для социальных сетей: посты, сторис, обложки, рубрики.\n' +
      'Создаём масштабируемую дизайн-систему, которая одинаково хорошо работает в ленте, сторис и рекламных форматах.'
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
        classes: 'absolute -bottom-0 -left-0 z-1 max-h-120 h-120'
      },
    ],
    badges: [
      {
        id: 1,
        title: 'Figma'
      },
      {
        id: 2,
        title: 'Photoshop'
      },
      {
        id: 3,
        title: 'After Effects'
      },
      {
        id: 4,
        title: 'Midjourney'
      },
      {
        id: 5,
        title: 'DALL·E'
      },
      {
        id: 6,
        title: 'ChatGPT'
      },
    ],
    title: 'Дизайн рекламы и баннеров в соцсетях',
    subtitle: 'Рекламные креативы для соцсетей — фокус на CTR и конверсию',
    description: 'Разработка баннеров и креативов для таргетированной рекламы.\n' +
      'Дизайн строится вокруг оффера, сценариев поведения пользователя и быстрого считывания смысла.'
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
        classes: 'absolute -top-0 -right-0 z-1 max-h-120 h-120'
      },
    ],
    badges: [
      {
        id: 1,
        title: 'Figma'
      },
      {
        id: 2,
        title: 'Photoshop'
      },
      {
        id: 3,
        title: 'Illustrator'
      },
      {
        id: 4,
        title: 'Midjourney'
      },
      {
        id: 5,
        title: 'Topaz'
      },
      {
        id: 6,
        title: 'Stable Diffusion'
      },
      {
        id: 7,
        title: 'ChatGPT'
      },
    ],
    title: 'Превью для видео',
    subtitle: 'Видео-превью — дизайн, который выделяется в рекомендациях',
    description: 'Создание обложек для видео с упором на эмоцию, интригу и читаемость на мобильных устройствах.\n' +
      'Работа с лицами, композитингом и контрастной типографикой.'
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
        classes: 'absolute -bottom-0 -right-0 z-1 max-h-120 h-120'
      },
      {
        src: 'ecomCards/air-fryer-mobile',
        name: 'air-fryer-mobile',
        classes: 'absolute -top-0 -left-0 z-1 max-h-120 h-120'
      },
    ],
    badges: [
      {
        id: 1,
        title: 'Figma'
      },
      {
        id: 2,
        title: 'Photoshop'
      },
      {
        id: 3,
        title: 'Illustrator'
      },
      {
        id: 4,
        title: 'Midjourney'
      },
      {
        id: 5,
        title: 'DALL·E'
      },
      {
        id: 6,
        title: 'ChatGPT'
      },
    ],
    title: 'Разработка карточек для маркетплейсов',
    subtitle: 'Карточки для маркетплейсов — визуал, который помогает продавать',
    description: 'Разработка карточек товаров для Ozon, Wildberries, Яндекс Маркета и других площадок.\n' +
      'Создаём инфографику, которая быстро доносит преимущества и соответствует требованиям маркетплейсов.'
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
    badges: [
      {
        id: 1,
        title: 'Photoshop'
      },
      {
        id: 2,
        title: 'Illustrator'
      },
      {
        id: 3,
        title: 'Figma'
      },
      {
        id: 4,
        title: 'Midjourney'
      },
      {
        id: 5,
        title: 'ChatGPT'
      },
      {
        id: 6,
        title: 'Stable Diffusion'
      },
    ],
    title: 'Дизайн упаковки',
    subtitle: 'Дизайн упаковки — от концепции до готового к печати продукта',
    description: 'Разработка дизайна упаковки, этикеток и коробок для физических продуктов.\n' +
      'Прорабатываем визуальный стиль, типографику и адаптацию под разные форматы и носители.'
  }
])
</script>