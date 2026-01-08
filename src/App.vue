<template>
  <BaseHeader />
  <main>
    <router-view />
  </main>
  <BaseFooter />

  <ToastManager />
</template>

<script setup lang="ts">
import BaseHeader from '@/components/ui/header/BaseHeader.vue'
import BaseFooter from '@/components/ui/footer/BaseFooter.vue'
import ToastManager from '@/components/ui/toast/ToastManager.vue';
</script>
