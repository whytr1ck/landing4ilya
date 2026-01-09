<template>
  <footer class="flex flex-col gap-2 py-8 text-center">
    <div v-if="ip || ogrnip || inn" class="flex items-center justify-center gap-4">
      <span>ИП {{ ip }}</span>
      <template v-if="ogrnip">
        <span v-if="ip">|</span>
        <span>ОРГНИП: {{ ogrnip }}</span>
        <span v-if="inn">|</span>
      </template>
      <template v-if="inn">
        <span v-if="!ogrnip">|</span>
        <span>ИНН: {{ inn }}</span>
      </template>
    </div>
    <a href="mailto:contact@racurs.ru" class="hover:underline">
      contact@racurs.ru
    </a>
    <p class="text-white/60">
      © 2018 - {{ currentYear  }} Ракурс. Все права защищены.
    </p>
  </footer>
</template>

<script setup lang="ts">
import {ref} from "vue";

const currentYear = new Date().getFullYear()

const ip = ref(import.meta.env.VITE_IP || null)
const ogrnip = ref(import.meta.env.VITE_OGRNIP || null)
const inn = ref(import.meta.env.VITE_INN || null)
</script>
