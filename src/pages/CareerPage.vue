<script setup lang="ts">
import {useHead} from '@unhead/vue'
import CareerIntro from '@/components/sections/career/CareerIntro.vue'
import BenefitsSection from '@/components/sections/career/BenefitsSection.vue'
import VacanciesList from '@/components/sections/career/VacanciesList.vue'
import ApplicationForm from '@/components/sections/career/ApplicationForm.vue'

useHead({
  title: 'Карьера — Ракурс',
  meta: [
    {name: 'description', content: 'Вакансии в студии Ракурс. Присоединяйтесь к команде дизайнеров.'},
    {property: 'og:title', content: 'Карьера — Ракурс'},
    {property: 'og:description', content: 'Вакансии в студии Ракурс. Присоединяйтесь к команде дизайнеров.'},
    {property: 'og:url', content: 'https://racurs-design.online/career'},
    {name: 'twitter:title', content: 'Карьера — Ракурс'},
    {name: 'twitter:description', content: 'Вакансии в студии Ракурс. Присоединяйтесь к команде дизайнеров.'},
    {property: 'og:image', content: 'https://racurs-design.online/images/og_image.png'},
    {name: 'twitter:image', content: 'https://racurs-design.online/images/og_image.png'}
  ],
  link: [
    {rel: 'canonical', href: 'https://racurs-design.online/career'}
  ]
})
</script>

<template>
  <div class="career-page">
    <CareerIntro />
    <BenefitsSection />
    <VacanciesList />
    <ApplicationForm />
  </div>
</template>
