<script setup>
import { ref } from 'vue';
import headNav from './components/headNav.vue'
import defaultButton from './components/defaultButton.vue'
import services from './components/services.vue'
import aboutCompany from './components/aboutCompany.vue'
import leasingItems from './components/leasingItems.vue';
import advantages from './components/advantages.vue';
import leasingAgent from './components/leasingAgent.vue'
import popQuestions from './components/popQuestions.vue'
import rates from './components/rates.vue'
import mainSlider from './components/mainSlider.vue';
import parallaxComponent from './components/parallaxComponent.vue'
import footerComponent from './components/footerComponent.vue'
import splashScreen from './components/splashScreen.vue'
import phoneRing from './components/phoneRing.vue'
import roofTypes from './components/roofTypes.vue';

const darkMode = ref(false)
const marginBottom = ref('mb-24')

const navigation = [
   { name: 'Услуги', href: '#services', current: true },
   { name: 'О нас', href: '#about', current: false },
   { name: 'Какие потолки устанавливаем', href: '#items', current: false },
   { name: 'Преимущества', href: '#advantages', current: false },
   { name: 'Частые вопросы', href: '#questions', current: false },
   { name: 'Заявка', href: '#application', current: false },
   { name: 'Отзыв клиента', href: '#rate', current: false },
   { name: 'Контакты', href: '#contacts', current: false },
 ]

</script>

<template>
  <router-view />
  <!-- <splashScreen />
  <div id="top" :class="{'dark': darkMode}" class="flex flex-col relative">
    <div class="w-full">
      <div class="flex flex-row justify-between items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-20">
        <h1 class="text-lg xs:text-xl" id="font">JBY Group</h1>
        <img src="/logo.png" alt="">
        <div class="flex flex-row text-nowrap items-center gap-2">
          <a href="tel:+74993900839" class="text-sm xs:text-lg">+7 (499) 390-08-39</a>
          <defaultButton class="text-sm">Звонок</defaultButton>
        </div>
      </div>
    </div>
    <headNav :nav="navigation"></headNav>
    <mainSlider />
    <div class="h-20" id="divider"></div> -->
    <!-- наши услуги -->
    <!-- <services id="services" :class="marginBottom" /> -->
    <!-- синяя полоса с условиями -->
    <!-- <section class="w-full bg-dev-500">
      <div class="hidden h-44 s:flex max-w-7xl mx-auto flex-row justify-between items-center px-6">
        <div class="flex flex-col justify-evenly w-1/5 text-white h-full">
          <p class="text-3xl font-bold">10 лет</p>
          <div class="h-0.5 bg-white"></div>
          <p class="text-2xl font-normal">Опыта работы</p>
        </div>
        <div class="flex flex-col text-center justify-evenly w-1/5 text-white h-full">
          <p class="text-3xl font-bold">20 лет гарантии</p>
          <div class="h-0.5 bg-white"></div>
          <p class="text-2xl font-normal">На натяжной потолок</p>
        </div>
        <div class="flex flex-col text-center justify-evenly w-1/5 text-white h-full">
          <p class="text-3xl font-bold">10 бригад</p>
          <div class="h-0.5 bg-white"></div>
          <p class="text-2xl font-normal">Профессионалов</p>
        </div>
        <div class="flex flex-col text-end justify-evenly w-1/5 text-white h-full">
          <p class="text-3xl font-bold">24 часа</p>
          <div class="h-0.5 bg-white"></div>
          <p class="text-2xl font-normal">От замера до монтажа</p>
        </div>
      </div>
      <div class="s:hidden min-h-96 max-w-lg mx-auto flex flex-col justify-between p-6 gap-8">
        <div class="flex flex-col w-full justify-between text-white h-1/5 gap-2">
          <p class="text-3xl font-bold">от 2 часов</p>
          <div class="h-0.5 bg-white"></div>
          <p class="text-2xl font-normal">Решение по сделке</p>
        </div>
        <div class="flex flex-col w-full justify-evenly text-white h-1/5 gap-2">
          <p class="text-3xl font-bold">от 0%</p>
          <div class="h-0.5 bg-white"></div>
          <p class="text-2xl font-normal">Аванс</p>
        </div>
        <div class="flex flex-col w-full justify-evenly text-white h-1/5 gap-2">
          <p class="text-3xl font-bold">по 2 документам</p>
          <div class="h-0.5 bg-white"></div>
          <p class="text-2xl font-normal">Оформление</p>
        </div>
        <div class="flex flex-col w-full justify-evenly text-white h-1/5 gap-2">
          <p class="text-3xl font-bold">от 6 до 84</p>
          <div class="h-0.5 bg-white"></div>
          <p class="text-2xl font-normal">Месяцев лизинга</p>
        </div>
      </div>
    </section> -->
    <!-- <section class="h-16 text-dev-300 w-full flex items-center">
      <marquee>Наши партнеры : ООО "Газпромбанк Автолизинг", АО "Сбербанк Лизинг", АО "ВТБ Лизинг", ООО "Каркаде", ООО "Интерлизинг", ООО "МК Лизинг", ООО "МСБ-Лизинг", ООО "Совкомбанк Лизинг", ООО "Фера", </marquee>
    </section> -->
    <!-- партнеры -->
    <!-- <section class="bg-white py-5 my-8 sm:py-6">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img class="col-span-2 w-48 object-contain lg:col-span-1" src="/gazprom.svg" alt="gazprom" />
          <img class="col-span-2 w-48 object-contain lg:col-span-1" src="/sber.svg" alt="sber" />
          <img class="col-span-2 w-48 object-contain lg:col-span-1" src="/vtb.svg" alt="vtb" />
          <img class="col-span-2 w-48 object-contain sm:col-start-2 lg:col-span-1" src="/enter.svg" alt="enter" />
          <img class="col-span-2 col-start-2 w-48 object-contain sm:col-start-auto lg:col-span-1" src="/mk.svg" alt="mk" />
        </div>
      </div>
    </section> -->
    <!-- <aboutCompany id="about" :class="marginBottom" />
    <leasingItems id="items" :class="marginBottom" />
    <advantages id="advantages" :class="marginBottom" />
    <div class="h-20 w-full bg-dev-100" :class="marginBottom"></div> -->
    
    <!-- <leasingAgent :class="marginBottom" /> -->

    <!-- СДЕЛАТЬ КАК НА САЙТЕ ПРО ВИДЫ ПОТОЛКОВ -->
    <!-- <roofTypes :class="marginBottom" />
    <popQuestions id="questions" :class="marginBottom" />
    <parallaxComponent id="application" />
    <rates id="rate" />
    <footerComponent id="contacts" :nav="navigation" />
    <phoneRing class="fixed bottom-5 right-6" />
  </div> -->
</template>

<style>

</style>