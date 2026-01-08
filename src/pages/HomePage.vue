<script setup lang="ts">
import HeroBanner from '@/components/sections/home/HeroBanner.vue'
import AISection from "@/components/sections/home/AISection.vue";
import PortfolioPreview from '@/components/sections/home/PortfolioPreview.vue'
import ClientsPreview from '@/components/sections/home/ClientsPreview.vue'
import ProcessSection from '@/components/sections/home/ProcessSection.vue'
import StatsSection from '@/components/sections/home/StatsSection.vue'
import VacanciesPreview from '@/components/sections/home/VacanciesPreview.vue'
</script>

<template>
  <div>
    <HeroBanner />
    <AISection />
    <PortfolioPreview />
    <ClientsPreview />
    <ProcessSection />
    <StatsSection />
    <VacanciesPreview />
  </div>
</template>
