<template>
  <section class="container mx-auto w-150 min-h-125 flex flex-col justify-center items-center py-16">
    <div class="flex flex-col gap-6 max-w-2/3 px-12 py-8 border border-[#F2F2F226] rounded-4xl shadow-2xl">
      <div class="flex flex-col justify-between gap-4 max-w-2/3 w w-full">
        <div class="flex flex-col gap-4 w-full">
          <h4 class="text-5xl">Готовы обсудить Ваши идеи!</h4>
          <p class="text-lg">Заполните форму, и мы свяжемся с вами для детального обсуждения задач. <br> Вместе определим концепцию, подберём оптимальный стиль, согласуем сроки и бюджет. Вы получите индивидуальное решение, которое усилит ваш бренд и поможет выделиться среди конкурентов.</p>
        </div>
      </div>

      <Form
        v-slot="$form"
        :resolver="resolver"
        :initialValues="initialValues"
        class="flex justify-center gap-4 w-full bg-transparent backdrop-blur-sm"
        @submit="onFormSubmit"
      >
        <div class="flex flex-col gap-1 w-5/12">
          <FloatLabel variant="on">
            <InputText
              name="username"
              type="text"
              variant="filled"
              size="large"
              class="w-full "
            />
            <label for="username">ФИО</label>
          </FloatLabel>
          <Message
            v-if="$form.username?.invalid"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ $form.username.error?.message }}
          </Message>
        </div>
        <div class="flex flex-col gap-1 w-5/12">
          <FloatLabel variant="on">
            <InputText
              name="email"
              type="text"
              variant="filled"
              size="large"
              class="w-full"
            />
            <label for="username">Почта</label>
          </FloatLabel>
          <Message
            v-if="$form.email?.invalid"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ $form.email.error?.message }}
          </Message>
        </div>

        <Button
          type="submit"
          severity="secondary"
          label="Отправить"
          class="p-4 h-15 w-2/12 !rounded-2xl"
        />
      </Form>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {zodResolver} from '@primevue/forms/resolvers/zod';
import {z} from 'zod';
import {toastServiceInstance} from "@/components/ui/toast/services/toastService.ts";
import {Form} from "@primevue/forms";
import {Button, FloatLabel, InputText, Message} from "primevue";

const initialValues = ref({
  username: '',
  email: '',
  text: ''
});

const resolver = ref(zodResolver(
  z.object({
    username: z.string().min(1, {message: 'Поле "ФИО" является обязательным для заполнения'}),
    email: z.string().min(1, {message: 'Поле "Почта" является обязательным для заполнения'}).email({message: 'Формат введенных данных неверен'}),
    text: z.string().min(1, {message: 'Поле "Сообщение" является обязательным для заполнения'})
  })
));

const onFormSubmit = ({valid}) => {
  if (valid) {
    toastServiceInstance.success('Скоро свяжемся с вами', 'Данные отправлены!', 15000);
  }
};
</script>