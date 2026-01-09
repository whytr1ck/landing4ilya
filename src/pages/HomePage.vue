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
import {useHead} from '@unhead/vue'
import HeroBanner from '@/components/sections/home/VideoBanner.vue'
import AISection from "@/components/sections/home/AISection.vue";
import PortfolioPreview from '@/components/sections/home/PortfolioPreview.vue'
import ClientsPreview from '@/components/sections/home/ClientsPreview.vue'
import StatsSection from '@/components/sections/home/StatsSection.vue'
import ReviewsSection from "@/components/sections/home/ReviewsSection.vue";
import ContactBlock from "@/components/sections/home/ContactBlock.vue";

useHead({
  title: 'Ракурс — студия графического дизайна',
  meta: [
    {name: 'description', content: 'Ракурс — студия графического дизайна. Создаём айдентику, брендинг, веб-дизайн и рекламные материалы для бизнеса.'},
    {property: 'og:title', content: 'Ракурс — студия графического дизайна'},
    {property: 'og:description', content: 'Создаём айдентику, брендинг, веб-дизайн и рекламные материалы для бизнеса.'},
    {property: 'og:url', content: 'https://racurs-design.online/'},
    {name: 'twitter:title', content: 'Ракурс — студия графического дизайна'},
    {name: 'twitter:description', content: 'Создаём айдентику, брендинг, веб-дизайн и рекламные материалы для бизнеса.'},
    {property: 'og:image', content: 'https://racurs-design.online/images/og_image.png'},
    {name: 'twitter:image', content: 'https://racurs-design.online/images/og_image.png'}
  ],
  link: [
    {rel: 'canonical', href: 'https://racurs-design.online/'}
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ракурс',
        description: 'Студия графического дизайна. Создаём айдентику, брендинг, веб-дизайн и рекламные материалы для бизнеса.',
        url: 'https://racurs-design.online',
        logo: 'https://racurs-design.online/logo.ico',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: 'Russian'
        }
      })
    }
  ]
})
</script>

