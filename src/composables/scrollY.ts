import { ref, onMounted, onUnmounted } from "vue";

export function useScrollY() {
  const scrollYValue = ref(window.scrollY || 0);
  let ticking = false;

  const update = () => {
    scrollYValue.value = window.scrollY || 0;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });

  return scrollYValue;
}