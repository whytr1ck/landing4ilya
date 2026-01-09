<template>
  <div class="clients-page">
    <ClientsIntro />
    <ClientsList />
    <TopicsSection />
    <TestimonialsSection />
  </div>
</template>

<script setup lang="ts">
import {useHead} from '@unhead/vue'
import ClientsIntro from '@/components/sections/clients/ClientsIntro.vue'
import ClientsList from '@/components/sections/clients/ClientsList.vue'
import TopicsSection from '@/components/sections/clients/TopicsSection.vue'
import TestimonialsSection from '@/components/sections/clients/TestimonialsSection.vue'

useHead({
  title: 'Клиенты — Ракурс',
  meta: [
    {name: 'description', content: 'Клиенты студии Ракурс: компании, которым мы помогли с брендингом и дизайном.'},
    {property: 'og:title', content: 'Клиенты — Ракурс'},
    {property: 'og:description', content: 'Компании, которым мы помогли с брендингом и дизайном.'},
    {property: 'og:url', content: 'https://racurs-design.online/clients'},
    {name: 'twitter:title', content: 'Клиенты — Ракурс'},
    {name: 'twitter:description', content: 'Компании, которым мы помогли с брендингом и дизайном.'},
    {property: 'og:image', content: 'https://racurs-design.online/images/og_image.png'},
    {name: 'twitter:image', content: 'https://racurs-design.online/images/og_image.png'}
  ],
  link: [
    {rel: 'canonical', href: 'https://racurs-design.online/clients'}
  ]
})
</script>