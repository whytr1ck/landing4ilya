<template>
  <div class="portfolio-page min-h-dvh">
    <PortfolioIntro />
    <CasesList />
    <ContactCTA />
  </div>
</template>

<script setup lang="ts">
import {useHead} from '@unhead/vue'
import PortfolioIntro from '@/components/sections/portfolio/PortfolioIntro.vue'
import CasesList from '@/components/sections/portfolio/CasesList.vue'
import ContactCTA from '@/components/sections/portfolio/ContactCTA.vue'

useHead({
  title: 'Портфолио — Ракурс',
  meta: [
    {name: 'description', content: 'Портфолио студии Ракурс: кейсы по брендингу, айдентике, веб-дизайну и рекламным материалам.'},
    {property: 'og:title', content: 'Портфолио — Ракурс'},
    {property: 'og:description', content: 'Кейсы по брендингу, айдентике, веб-дизайну и рекламным материалам.'},
    {property: 'og:url', content: 'https://racurs-design.online/portfolio'},
    {name: 'twitter:title', content: 'Портфолио — Ракурс'},
    {name: 'twitter:description', content: 'Кейсы по брендингу, айдентике, веб-дизайну и рекламным материалам.'},
    {property: 'og:image', content: 'https://racurs-design.online/images/og_image.png'},
    {name: 'twitter:image', content: 'https://racurs-design.online/images/og_image.png'}
  ],
  link: [
    {rel: 'canonical', href: 'https://racurs-design.online/portfolio'}
  ]
})
</script>
