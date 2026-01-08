<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 text-center">
    <a href="mailto:contact@racurs.ru" class="text-white hover:underline">
      contact@racurs.ru
    </a>
    <p class="mt-2 text-white/60">
      © 2022 - {{ currentYear  }} Ракурс. Все права защищены.
    </p>
  </footer>
</template>
