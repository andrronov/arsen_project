<template>
   <section class="bg-white">
     <div class="mx-auto max-w-7xl px-6 lg:px-8">
       <div class="mx-auto max-w-2xl lg:text-center">
         <h2 class="text-base font-semibold leading-7 text-dev-300">Процесс установки натяжных потолков приятнее</h2>
         <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">С нашими услугами:</p>
         <!-- <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p> -->
       </div>
       <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
         <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
           <div v-for="feature in features" :key="feature.name" class="relative pl-16">
             <dt class="text-base font-semibold leading-7 text-gray-900">
               <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-dev-300">
                 <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
               </div>
               {{ feature.name }}
             </dt>
             <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
           </div>
         </dl>
       </div>
       <div class="mt-24 w-full flex flex-col items-center">
          <a href="#application" v-smooth-scroll="{ duration: 1000, offset: -50 }" class="p-3 text-center w-44 border-2 border-dev-500 rounded-2xl font-bold hover:bg-dev-500 hover:text-white">Оставить заявку</a>
       </div>
      </div>
    </section>
 </template>
 
 <script setup>
 import { MagnifyingGlassIcon, ArrowRightCircleIcon, DocumentArrowDownIcon, UserPlusIcon, CurrencyDollarIcon, BanknotesIcon } from '@heroicons/vue/24/outline'
 
 const features = [
   {
     name: 'Индивидуальный подбор ',
     description:
       'лучшего предложения на основе ваших потребностей',
     icon: MagnifyingGlassIcon,
   },
   {
     name: 'Многолетний опыт работы',
     description:
       '10 лет успешных работ и довольных клиентов',
     icon: ArrowRightCircleIcon,
   },
   {
     name: 'Замеры и расчёт',
     description:
       'необходимых для качественной установки',
     icon: DocumentArrowDownIcon,
   },
   {
     name: 'Консультация на любом этапе',
     description:
       'монтажа и установки потолков',
     icon: UserPlusIcon,
   },
   {
     name: 'Работают',
     description:
       'исключительные профессионалы своего дела',
     icon: CurrencyDollarIcon
   },
   {
     name: 'Гарантия',
     description:
       '20 лет на натяжные потолки',
      icon: BanknotesIcon,
   },
 ]

 function submitApplication(){
   alert('Заявка успешно оставлена (в разработке)')
 }
 </script>