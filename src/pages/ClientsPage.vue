<script setup lang="ts">
import ClientsIntro from '@/components/sections/clients/ClientsIntro.vue'
import ClientsList from '@/components/sections/clients/ClientsList.vue'
import TopicsSection from '@/components/sections/clients/TopicsSection.vue'
import TestimonialsSection from '@/components/sections/clients/TestimonialsSection.vue'
</script>

<template>
  <div class="clients-page">
    <ClientsIntro />
    <ClientsList />
    <TopicsSection />
    <TestimonialsSection />
  </div>
</template>
