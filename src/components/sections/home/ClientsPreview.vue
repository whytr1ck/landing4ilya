<template>
  <section class="container mx-auto w-full flex flex-col justify-center py-16 gap-20">
    <h3 class="text-9xl text-left">Клиенты</h3>

    <div class="flex flex-wrap justify-space-between gap-y-20 max-w-4xl ml-auto">
      <div
        v-for="client in clients"
        :key="client.img"
        class="flex flex-col w-1/5"
      >
        <img
          :src="`src/assets/images/companies/${client.img}.svg`"
          :alt="client.img"
          class="h-24 w-auto object-contain"
        />

<!--
        <p class="text-2xl text-center mt-2">{{ client.name }}</p>
-->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const clients = [
  {
    img: 'sber',
    name: 'Сбер',
    description: 'description'
  },
  {
    img: 'tbank',
    name: 'Т-банк',
    description: 'description'
  },
  {
    img: 'vk',
    name: 'Вконтакте',
    description: 'description'
  },
  {
    img: 'yandex',
    name: 'Яндекс',
    description: 'description'
  },
  {
    img: 'kinopoisk',
    name: 'Кинопоиск',
    description: 'description'
  },
  {
    img: 'rutube',
    name: 'Rutube',
    description: 'description'
  },
  {
    img: 'mis',
    name: 'Mis',
    description: 'description'
  },
  {
    img: 'lacoste',
    name: 'Lacoste',
    description: 'description'
  },
  {
    img: 'bybit',
    name: 'Bybit',
    description: 'description'
  },
  {
    img: 'binance',
    name: 'Binance',
    description: 'description'
  }
]
</script>