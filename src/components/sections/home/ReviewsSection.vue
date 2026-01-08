<template>
  <section class="container mx-auto w-full flex flex-col py-16 gap-20">
    <h3 class="text-9xl text-left">Отзывы</h3>
    <div class="max-w-7xl ml-auto">
      <Swiper
        ref="sliderRef"
        :slidesPerView="1"
        loop
        space-between="50px"
        @swiper="onSwiper"
      >
        <template v-for="item in testimonialItems" :key="item.name">
          <SwiperSlide>
            <div class="relative flex justify-center">
              <div class="relative w-full">
                <div class="w-full items-center flex flex-col gap-16 md:flex-row overflow-hidden">
                  <div class="relative min-w-120 w-full h-160">
                    <img
                      :src="`src/assets/images/reviews/${item.image}.jpg`"
                      alt="image"
                      class="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div>
                    <p class="mb-11 text-base font-normal leading-[1.81] text-body-color dark:text-dark-6 sm:text-[22px]">
                      {{ item.details }}
                    </p>

                    <h4 class="mb-2 text-[22px] font-semibold leading-6.75 text-dark dark:text-white">
                      {{ item.name }}
                    </h4>
                    <p class="text-base text-body-color dark:text-dark-6">
                      {{ item.position }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </template>

        <div class="absolute top-0 right-0 z-10 flex items-center justify-center gap-5">
          <div class="prev-arrow cursor-pointer" @click="handlePrev">
            <button class="d flex h-12 w-12 items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current"
              >
                <path
                  d="M17.5 9.5H4.15625L9.46875 4.09375C9.75 3.8125 9.75 3.375 9.46875 3.09375C9.1875 2.8125 8.75 2.8125 8.46875 3.09375L2 9.65625C1.71875 9.9375 1.71875 10.375 2 10.6562L8.46875 17.2188C8.59375 17.3438 8.78125 17.4375 8.96875 17.4375C9.15625 17.4375 9.3125 17.375 9.46875 17.25C9.75 16.9687 9.75 16.5313 9.46875 16.25L4.1875 10.9062H17.5C17.875 10.9062 18.1875 10.5937 18.1875 10.2187C18.1875 9.8125 17.875 9.5 17.5 9.5Z"
                  fill="#000"
                />
              </svg>
            </button>
          </div>

          <div class="next-arrow cursor-pointer" @click="handleNext">
            <button class="d flex h-12 w-12 items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current"
              >
                <path
                  d="M18 9.6875L11.5312 3.125C11.25 2.84375 10.8125 2.84375 10.5312 3.125C10.25 3.40625 10.25 3.84375 10.5312 4.125L15.7812 9.46875H2.5C2.125 9.46875 1.8125 9.78125 1.8125 10.1562C1.8125 10.5312 2.125 10.875 2.5 10.875H15.8437L10.5312 16.2813C10.25 16.5625 10.25 17 10.5312 17.2813C10.6562 17.4063 10.8437 17.4688 11.0312 17.4688C11.2187 17.4688 11.4062 17.4062 11.5312 17.25L18 10.6875C18.2812 10.4062 18.2812 9.96875 18 9.6875Z"
                  fill="#000"
                />
              </svg>
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import type {Swiper as SwiperType} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'

const sliderRef = ref<SwiperType | null>(null)
const testimonialItems = ref([
  {
    image: '11',
    details: 'Студия взялась за разработку дизайна для наших социальных сетей в крайне сжатые сроки — после неудачного опыта работы с другой командой. Несмотря на это, проект был полностью реализован успешно. Особенно впечатлило, что команда успевала проводить исследования, анализировать нишу и параллельно разрабатывать визуальные решения.\n' +
      'Цифры по эффективности сейчас предоставить не можем, но результат однозначно превзошёл ожидания: визуальный стиль получился цельным, современным и точно отражающим бренд. Работа команды оставила исключительно положительное впечатление.',
    name: 'Анатолий Гаврилов',
    position: 'Основатель онлайн школы.'
  },
  {
    image: '12',
    details: 'Для нашей ювелирной сети команда Ракурс сделала не просто ребрендинг. Они полностью переосмыслили фирменный стиль, включая упаковку и материалы для мероприятий. Очень понравился их творческий подход и внимание к деталям. В итоге нам удалось привлечь новую аудиторию, а продажи заметно выросли.',
    name: 'Наталья Слепакова',
    position: 'Руководитель ювелирной сети'
  },
  {
    image: '13',
    details: 'Команда Ракурс создала для нас по-настоящему уникальный фирменный стиль, который сразу выделил клуб среди конкурентов. Работа была проделана огромная — от глубокой проработки концепции до детальных и продуманных промо-материалов. Новая рекламная стратегия дала ощутимый результат: посещаемость клуба выросла на 30% уже в первые месяцы после релонча. Мы искренне благодарны команде за вклад в наш успех и за креативный подход, который помог привлечь новых клиентов. Результат превзошёл все ожидания, и сейчас мы уже планируем дальнейшие совместные проекты.',
    name: 'Анастасия Столярова',
    position: 'Директор фитнесс клуба'
  },
  {
    image: '14',
    details: 'Мы обратились за обновлением бренда и не ожидали, что изменения затронут не только визуальный стиль, но и саму подачу наших курсов. Команда глубоко разобралась в продукте, аудитории и предложила новое позиционирование. В результате уже в первый квартал после запуска новой концепции количество учеников выросло на 40%. Это превзошло наши ожидания и дало мощный импульс развитию проекта.',
    name: 'Олег Габасов',
    position: 'Руководитель онлайн школы'
  },
])

const initializeSwiper = () => {
  if (sliderRef.value) {
    sliderRef.value.slideTo(0)
  }
}

const onSwiper = (swiperInstance: SwiperType) => {
  sliderRef.value = swiperInstance

  initializeSwiper()
}

const handlePrev = () => {
  if (sliderRef.value) {
    sliderRef.value.slidePrev()
  }
}

const handleNext = () => {
  if (sliderRef.value) {
    sliderRef.value.slideNext()
  }
}

onMounted(() => {
  initializeSwiper()
})
</script>