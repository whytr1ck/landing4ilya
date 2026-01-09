<template>
  <section class="container mx-auto w-full flex flex-col justify-center py-16 gap-20">
    <div class="group flex gap-6 items-end text-9xl cursor-pointer" @click="router.push('/clients')">
      <span>Клиенты</span>
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

    <div class="flex flex-wrap justify-space-between gap-10 max-w-6xl w-full ml-auto">
      <div
        v-for="client in clients"
        :key="client.name"
        class="flex flex-col gap-4.5"
        style="width: calc(100% / 3 - 27px);"
      >
        <img
          :src="`src/assets/images/companies/${client.img}.svg`"
          :alt="client.img"
          class="h-24 w-fit object-contain"
        />

        <p class="text-lg text-[#8d8d8d]">{{ client.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import router from "@/router";

const clients = [
  {
    img: 'sber',
    name: 'Сбер',
    description: 'Разработка визуалов и креативов для SMM и digital-рекламы, A/B-адаптация форматов, усиление вовлечения и узнаваемости бренда.'
  },
  {
    img: 'tbank',
    name: 'Т-банк',
    description: 'Визуалы, шаблоны и оформление контента в рамках бренд-гайдов.'
  },
  {
    img: 'delo',
    name: 'ГК Дело',
    description: 'Креатив, визуалы и адаптация под ключевые digital-площадки с сохранением единого визуального языка бренда.'
  },
  {
    img: 'yandex',
    name: 'Яндекс',
    description: 'Разработка визуальных решений для промо-кампаний Яндекс Маркета, спецпредложений и регулярного контента с сохранением брендового стиля.'
  },
  {
    img: 'keyauto',
    name: 'КлючАвто',
    description: 'Креативные визуалы, графика и шаблоны для соцсетей и рекламных размещений, поддержка единого стиля коммуникации бренда.'
  },
  {
    img: 'lacoste',
    name: 'Lacoste',
    description: 'Креативные решения, композиция, типографика и визуалы с акцентом на ДНК бренда.'
  },
]
</script>