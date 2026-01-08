<script setup lang="ts">
</script>

<template>
  <section class="flex justify-center items-center max-h-dvh h-dvh">
    <h1 class="hidden">Ракурс</h1>

    <video class="w-full h-full" autoplay loop muted playsinline>
      <source src="@/assets/videos/banner/desktop.webm" type="video/webm" media="(min-width: 768px)" />
      <source src="@/assets/videos/banner/desktop.mp4" type="video/mp4" media="(min-width: 768px)" />

      <source src="@/assets/videos/banner/mobile.webm" type="video/webm" media="(max-width: 768px)" />
      <source src="@/assets/videos/banner/mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
    </video>
  </section>
</template>
