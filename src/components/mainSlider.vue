<template>
   <carousel :autoplay="3500" :wrap-around="true" :items-to-show="1">
     <slide :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.img}');`" class="carousel__item bg-cover bg-center" v-for="(slide, index) in slides" :key="index">
       <h2 class="font-semibold text-xl">{{slide.title}}</h2>
       <p class="font-medium bg-gray-900/20 p-2">{{ slide.text }}</p>
       <div>
         <p class="text-gray-300 text-base mb-4">Оставьте заявку и мы свяжемся с Вами в ближайшее время!</p>
         <a href="#application" v-smooth-scroll="{ duration: 1000, offset: -50 }" class="bg-dev-100 p-3 rounded-full text-white dark:text-black cursor-pointer hover:bg-dev-500 hover:text-gray-100">
            Оставить заявку
         </a>
       </div>
     </slide>
 
     <template #addons>
       <navigation />
       <pagination />
     </template>
   </carousel>
 </template>
 
 <script>
 import 'vue3-carousel/dist/carousel.css'
 import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
 
 export default {
   name: 'App',
   components: {
     Carousel,
     Slide,
     Pagination,
     Navigation,
   },
   data(){
      return{
         slides: [
            {
               img: '/showroom2-m1.jpg',
               title: 'Потолок в офис от 149 руб/м2',
               text: 'Цена указана за изготовление полотна'
            },
            {
               img: '/20151008155139-2.jpg',
               title: 'Парящий потолок от 700 руб/пм.',
               text: "Стоимость монтажа потолка под ключ рассчитывается индивидуально"
            },
            {
               img: '/glav.jpg',
               title: 'Матовый потолок от 450 руб./м2',
               text: "Цена указана за изготовление полотна, стоимость монтажа потолка под ключ рассчитывается индивидуально"
            },
            {
               img: '/akciya8-2.jpg',
               title: 'Скидки пенсионерам',
               text: "Мы предоставляем скидки на натяжной потолок пенсионерам в размере 15% до 20%"
            },
         ]
      }
   }
 }
 </script>
 
 <style scoped>
.carousel__item {
  min-height: 590px;
  width: 100%;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: border-box;
}
</style>

<style>svg.carousel__icon{
   fill: white;
}</style>