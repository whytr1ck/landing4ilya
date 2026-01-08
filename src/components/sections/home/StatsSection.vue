<template>
  <section class="container mx-auto w-full flex flex-col py-16 gap-20">
    <h3 class="text-9xl text-left">Цифры</h3>

    <div class="">
      <div
        v-for="statistic in statistics"
        :key="statistic.id"
        class="inline-block align-top w-1/4 my-12 ml-[5%]"
      >
        <p class="text-8xl mb-1">{{ statistic.indicator }}</p>
        <p class="text-2xl" v-html="statistic.description"></p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const statistics = [
  {
    id: 1,
    indicator: '8',
    description: 'лет Ракурс <br> на рынке'
  },
  {
    id: 2,
    indicator: '180+',
    description: 'реализованных <br> проектов'
  },
  {
    id: 3,
    indicator: '9',
    description: 'место в рейтинге <br> дизайна'
  },
  {
    id: 4,
    indicator: '7',
    description: 'место в рейтинге <br> SMM IT'
  },
  {
    id: 5,
    indicator: '6',
    description: 'место в рейтинге <br> поддержки и развития'
  },
  {
    id: 6,
    indicator: '3',
    description: 'место в рейтинге <br> комплкесного продвижения'
  }
]
</script>