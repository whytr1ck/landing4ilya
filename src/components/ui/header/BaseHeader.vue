<template>
  <header class="fixed z-10 top-0 left-1/2 -translate-x-1/2 w-full">
    <div :class="[
        'flex items-center justify-between py-4 px-6 border border-transparent rounded-2xl bg-transparent ',
        { 'backdrop-blur-sm': scrollPosition > 0 }
      ]"
    >
      <router-link
        to="/"
        class="hover:scale-110 transition-transform"
        @click.prevent.stop="clickOnLogo"
      >
        <img
          src="@/assets/images/logo.svg"
          class="w-16 h-16"
          alt="logo"
        >
      </router-link>

      <div class="flex items-center gap-x-5">
        <router-link
          v-for="link in textLinks"
          :key="link.title"
          :to="link.href"
          :class="[
            `text-xl text-white p-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full`,
            `${link.href === router.currentRoute.value.fullPath ? 'after:w-full' : 'after:w-0'}`
          ]"
        >
          {{ link.title }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useScrollY} from "@/composables/scrollY.ts";
import {scrollToTop} from "@/utils/scroll.ts";
import router from "@/router";

const scrollPosition = ref(useScrollY())
const textLinks = [
  {title: 'Портфолио', href: '/portfolio'},
  {title: 'Клиенты', href: '/clients'},
  {title: 'Карьера', href: '/career'},
]

const clickOnLogo = () => {
  if (router.currentRoute.value.name === 'home') {
    return scrollToTop()
  }

  return router.push('/')
}
</script>