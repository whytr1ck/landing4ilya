<template>
  <header :class="['fixed z-10 top-0 left-1/2 -translate-x-1/2 w-full bg-transparent', { 'backdrop-blur-sm': scrollPosition > 0 }]">
    <div class="relative flex items-center justify-between py-4 container mx-auto">
      <div class="flex items-center">
        <router-link
          to="/"
          class="group"
          @click.prevent.stop="clickOnLogo"
        >
          <img
            src="@/assets/images/logo.svg"
            class="group-hover:scale-110 w-18 h-18 transition-transform duration-300"
            alt="logo"
          >
          
          <transition name="fade">
            <div v-show="scrollPosition === 0" class="absolute top-12.75 left-18 w-40 flex justify-between text-2xl font-thin">
              <span>A</span>
              <span>C</span>
              <span>U</span>
              <span>R</span>
              <span>S</span>
            </div>
          </transition>
        </router-link>
      </div>


      <div class="flex items-center gap-x-5">
        <router-link
          v-for="link in textLinks"
          :key="link.title"
          :to="link.href"
          :class="[
            `text-2xl text-white p-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full`,
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
import {computed, ref} from "vue";
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