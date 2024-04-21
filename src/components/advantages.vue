<template>
  <section class="flex flex-col items-center">
    <h3 class="text-dev-300 font-bold text-center text-3xl sm:text-4xl mb-16 px-4">
      Что вы получаете выбирая нас?
    </h3>
    <div class="flex flex-row items-start max-w-3xl px-8 s:px-4 relative mb-6" v-for="(item, index) in items" :key="index">
      <component :is="item.img" class="absolute -left-1 s:-left-6 -top-2 h-10 w-10 text-dev-300" aria-hidden="true" />
      <div>
        <h5 class="font-bold text-xl mb-3">{{ item.title }}</h5>
        <p class="text-lg">{{ item.text }}</p>
        <p v-if="item.adding" class="text-dev-500 font-semibold mt-1 text-lg">{{ item.adding }}</p>
      </div>
    </div>
    <p @click="toSection('application')" class="cursor-pointer p-3 mt-8 text-center w-44 border-2 border-dev-500 rounded-2xl font-bold hover:bg-dev-500 hover:text-white">Оставить заявку</p>
  </section>
</template>

<script setup>
import {ref} from 'vue'
import {CheckIcon} from '@heroicons/vue/24/solid'

const items = ref([
  {
    adding: 'Натяжные потолки - это идеальное решение для любого интерьера.',
    img: CheckIcon,
    title: 'Профессиональный подход к каждому проекту',
    text: 'Мы предлагаем индивидуальный подход к каждому клиенту, учитывая все пожелания и особенности помещения. Наши специалисты помогут выбрать оптимальный вариант потолка, который будет радовать вас долгие годы.'
  },
  {
    img: CheckIcon,
    title: 'Экономия времени и денег',
    text: 'Благодаря использованию современных материалов и технологий, мы предлагаем высокое качество по доступным ценам. Мы работаем быстро и эффективно, чтобы минимизировать неудобства для вас.'
  },
  {
    img: CheckIcon,
    title: 'Широкий ассортимент и высокое качество',
    text: 'В нашем каталоге вы найдете широкий выбор натяжных потолков различных текстур и цветов. Мы используем только качественные материалы, которые обеспечивают долговечность и безопасность наших потолков.'
  },
  {
    img: CheckIcon,
    title: 'Гарантия и поддержка',
    text: 'На все наши работы мы предоставляем гарантию. Мы всегда готовы прийти на помощь в случае возникновения вопросов или необходимости в дополнительном обслуживании.'
  },
])

function toSection(el){
  const section = document.getElementById(el)
  section.scrollIntoView({
    behavior: 'smooth',
        block: 'start',
  })
 }
</script>

<style></style>
