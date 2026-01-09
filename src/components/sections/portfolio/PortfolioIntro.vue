<template>
  <section class="container flex flex-col gap-15 mx-auto pt-50 pb-16">
    <p class="max-w-6xl w-full text-4xl font-medium pointer-events-none">
      Разрабатываем визуальные решения, объединяя современные технологии и креативный подход — за 8 лет реализовали <br> проекты для ~100 компаний
    </p>

    <div class="flex gap-2">
      <Badge
        v-for="direction in directions"
        :key="direction.id"
        :style="`background: ${direction.background}`"
        class="!text-white"
      >
        {{ direction.title }}
      </Badge>
    </div>
  </section>
</template>

<script setup lang="ts">
import {Badge} from "primevue";
const directions = [
  {
    id: 1,
    title: 'Дизайн соцсетей',
    background: '#0ea5e9'
  },
  {
    id: 2,
    title: 'Дизайн рекламы и баннеров в соцсетях',
    background: '#4d24d8'
  },
  {
    id: 3,
    title: 'Дизайн превью для видео',
    background: '#ff6b4a'
  },
  {
    id: 4,
    title: 'Разработка карточек для маркетплейсов',
    background: '#10b981'
  },
  {
    id: 5,
    title: 'Дизайн упаковки',
    background: '#ec4899'
  },
]
</script>