<template>
  <footer class="w-full flex flex-col z-30">
   <div id="f_upper" class="max-w-7xl mx-auto flex flex-col items-center gap-2 mb-6">
      <h1 class="text-lg xs:text-xl" id="font">JBY Group</h1>
      <p>+7 (499) 390-08-39</p>
      <p>jby.group@mail.ru</p>
      <p>г. Москва</p>
      <p>Время работы: с 08:00 до 22:00</p>
      <div class="flex flex-row items-center gap-4 mt-4">
         <a href="tel:+74993900839">
            <img src="/phone.svg" class="w-14 h-14 mt-1 bg-white text-center rounded-lg hover:text-white hover:bg-orange-200 p-1 cursor-pointer" alt="">
         </a>
         <a href="mailto:jby.group@mail.ru">
            <img src="/mail.svg" class="w-14 h-14 bg-white text-center rounded-lg hover:text-white hover:bg-orange-200 p-1 cursor-pointer" alt="">
         </a>
      </div>
   </div>
   <div id="f_downer" class="w-full flex px-2 sm:px-6 lg:px-8 flex-row justify-between items-center bg-dev-500 min-h-40 text-white text-sm">
      <div class="flex flex-col items-start gap-1">
         <router-link to="/">
            <img src="/logo.png" class="" alt="">
         </router-link>
         <!-- <h1 class="text-lg xs:text-xl" id="font">JBY Group</h1> -->
         <!-- <p>ИП **** *****</p>
         <p>ИНН *********</p>
         <p>ОГРН **********</p> -->
      </div>
      <div class="hidden xs:flex flex-col flex-wrap text-center s:flex-row items-center">
         <p v-for="item in nav" :key="item.name" @click="toSection(item.href)" class="cursor-pointer text-gray-300 hover:bg-orange-800 hover:text-white rounded-md py-1 s:px-3 s:py-2 text-sm font-medium" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</p>
      </div>
      <p @click="toSection('top')" class="cursor-pointer flex flex-row items-center gap-1 h-full">Наверх
         <img src="/arrowUp.svg" alt="arrow" class="w-6 h-6">
      </p>
   </div>
  </footer>
</template>

<script setup>
defineProps({
   nav: {
      type: Array
   }
})

function toSection(el){
  const section = document.getElementById(el)
  section.scrollIntoView({
    behavior: 'smooth',
        block: 'start',
  })
 }
</script>

<style>

</style>