<template>
   <section class="w-full bg-dev-500 flex flex-col items-center text-white">
      <h3 class="font-bold text-4xl mb-16 mt-6 text-center">Какие натяжные потолки мы устанавливаем</h3>
      <div class="max-w-7xl grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 mb-24">
         <div v-for="(item, index) in leasItems" :key="index" class="flex w-auto flex-col items-center">
            <img :src='item.img' alt="car" class="w-72 h-44 object-cover border-4 shadow-sm shadow-white border-white mb-4">
            <h5 class="font-bold text-xl">{{ item.title }}</h5>
            <!-- <ul class="text-center">
               <li v-for="(transport, index) in item.items" :key="index">{{ transport }}</li>
            </ul> -->
            <router-link class="mt-4" :to="`/product${item.href}`">
               <defaultButton>Посмотреть</defaultButton>
            </router-link>
         </div>
      </div>
    <a href="#application" v-smooth-scroll="{ duration: 1000, offset: -50 }" class="p-3 mt-2 mb-8 text-center w-44 border-2 text-dev-500 bg-white border-dev-500 rounded-2xl font-bold hover:bg-dev-100 hover:text-white">Оставить заявку</a>
   </section>
</template>

<script setup>
import defaultButton from './defaultButton.vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const leasItems = ref([
   {
      title: 'Матовые',
      items: ['- Легковой', '- Грузовой', '- Коммерческий'],
      img: "/matovie.webp",
      href: '/matovie'
   },
   {
      title: 'Двухуровневые',
      items: ['- Дорожная', '- Строительная', '- Сельскохозяйственного назначения'],
      img: "/dvuxurovnevyj-natyazhnoj-potolok.webp",
      href: '/dvukhurovnevie'
   },
   {
      title: 'С фотопечатью',
      items: ['- Легковой', '- Грузовой', '- Коммерческий'],
      img: "/natyazhnoj-potolok-s-fotopechatyu.webp",
      href: '/photoprint'
   },
   {
      title: 'Парящие потолки',
      items: ['- Дорожная', '- Строительная', '- Сельскохозяйственного назначения'],
      img: "/paryashie-3.webp",
      href: '/paryaschie'
   },
   {
      title: 'Звездное небо',
      items: ['- Легковой', '- Грузовой', '- Коммерческий'],
      img: "/5-9.webp",
      href: '/starsky'
   },
   {
      title: 'Глянцевые',
      items: ['- Дорожная', '- Строительная', '- Сельскохозяйственного назначения'],
      img: "/6-1.webp",
      href: '/glyantsevie'
   },
])
</script>