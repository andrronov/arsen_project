<template>
   <div class="overflow-hidden bg-white py-24 sm:py-32">
     <div class="mx-auto max-w-7xl px-6 lg:px-8">
       <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
         <div class="lg:pr-8 lg:pt-4">
           <div class="lg:max-w-lg">
             <h2 class="text-base font-semibold leading-7 text-indigo-600">о компании</h2>
             <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">JBY Group</p>
             <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
               <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                 <dt class="inline font-semibold text-gray-900">
                   <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-dev-300" aria-hidden="true" />
                   {{ feature.name }}
                 </dt>
                 {{ ' ' }}
                 <dd class="inline">{{ feature.description }}</dd>
               </div>
             </dl>
             <p class="mt-6 text-lg leading-8 text-dev-300">Наш приоритет - прекрасная работа за доступную стоимость.</p>
           </div>
         </div>
         <img src="/group.webp" alt="Product screenshot" class="w-[48rem] bg-gray-500 max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
       </div>
     </div>
   </div>
 </template>
 
 <script setup>
 import { PaperAirplaneIcon, CheckCircleIcon, CubeIcon, FolderIcon } from '@heroicons/vue/20/solid'
 
 const features = [
   {
     name: 'JBY Group - это лучшие',
     description:
       'натяжные потолки по привлекательной цене',
     icon: PaperAirplaneIcon,
   },
   {
     name: 'Прекрасно',
     description: 'выполняем свою работу и находимся в топе рынка',
     icon: CheckCircleIcon,
   },
   {
     name: 'Гарантируем',
     description: 'нашим клиентам самые выгодные условия и качество работы.',
     icon: CubeIcon,
   },
   {
     name: 'Наши клиенты',
     description: 'остаются довольными и рекомендуют наши услуги своим знакомым.',
     icon: FolderIcon,
   },
 ]
 </script>