<template>
  <div class="flex items-center justify-center w-full min-h-[80dvh] py-8 overflow-hidden">
    <div
      v-for="block in blocks"
      :key="block.id"
      class="ai-block relative flex items-center justify-center p-40 -mx-10"
    >
      <p :class="`text-4xl text-center ${block.width} z-${block.id}`">
        {{ block.title }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const blocks = ref([
  {
    id: 1,
    title: 'Используем искусственный интеллект',
    width: 'max-w-sm'
  },
  {
    id: 2,
    title: 'Снизим стоимость вашего проекта за счёт опыта и наработок',
    width: 'max-w-lg'
  },
  {
    id: 3,
    title: 'Колоссальный опыт и сильные специалисты',
    width: 'max-w-2xs'
  }
])
</script>

<style scoped>
.ai-block {
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #ffffff40;
    border-radius: 50%;
    transform: skew(-7deg, -7deg);
    z-index: -1;
  }
}
</style>