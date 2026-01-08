<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>

<template>
  <section class="clients-preview py-16">
    <Swiper
      :slides-per-view="1"
      :space-between="30"
    >
      <SwiperSlide>
        <div class="flex items-center justify-center h-64 bg-white/5 rounded-lg">
          Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="flex items-center justify-center h-64 bg-white/5 rounded-lg">
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="flex items-center justify-center h-64 bg-white/5 rounded-lg">
          Slide 3
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
