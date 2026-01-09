<template>
  <div>
    <HeroBanner />
    <AISection />
    <PortfolioPreview />
    <ClientsPreview />
    <StatsSection />
    <ReviewsSection />
    <ContactBlock />
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '@/components/sections/home/VideoBanner.vue'
import AISection from "@/components/sections/home/AISection.vue";
import PortfolioPreview from '@/components/sections/home/PortfolioPreview.vue'
import ClientsPreview from '@/components/sections/home/ClientsPreview.vue'
import StatsSection from '@/components/sections/home/StatsSection.vue'
import ReviewsSection from "@/components/sections/home/ReviewsSection.vue";
import ContactBlock from "@/components/sections/home/ContactBlock.vue";
</script>

