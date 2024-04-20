<template>
   <div class="w-full px-4 pt-16">
    <h3 class="text-center font-bold text-dev-300 text-2xl sm:text-3xl mb-6">Часто задаваемые вопросы</h3>
     <div class="max-w-7xl mx-auto rounded-2xl bg-white p-2">
       <Disclosure v-slot="{ open }">
         <DisclosureButton
           class="flex w-full justify-between rounded-lg bg-dev-500 px-4 py-2 text-left text-lg font-medium text-orange-100 hover:bg-orange-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75"
         >
           <span>Какие виды натяжных потолков вы предлагаете?</span>
           <ChevronUpIcon
             :class="open ? 'rotate-180 transform' : ''"
             class="h-5 w-5 text-orange-200"
           />
         </DisclosureButton>
         <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-gray-800">
           <p class="mb-4">Мы предлагаем широкий ассортимент натяжных потолков, включая:</p>
           <ul>
            <li>- Глянцевые</li>
            <li>- Матовые</li>
            <li>- Сатиновые</li>
            <li>- Потолки с фотопечатью</li>
            <li>- Многоуровневые потолки</li>
            <li>- Потолки с эффектом "звездное небо"</li>
           </ul>
         </DisclosurePanel>
       </Disclosure>
       <Disclosure v-slot="{ open }">
         <DisclosureButton
           class="flex w-full justify-between rounded-lg bg-dev-500 px-4 py-2 text-left text-lg font-medium text-orange-100 hover:bg-orange-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75"
         >
           <span>Какие преимущества натяжных потолков?</span>
           <ChevronUpIcon
             :class="open ? 'rotate-180 transform' : ''"
             class="h-5 w-5 text-orange-200"
           />
         </DisclosureButton>
         <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-gray-800">
           <p class="mb-4">Натяжные потолки обладают множеством преимуществ, включая:</p>
           <ul>
            <li>- Влагостойкость</li>
            <li>- Долговечность</li>
            <li>- Не требуют покраски и дополнительного ухода</li>
            <li>- Быстрый и чистый монтаж</li>
            <li>- Возможность скрыть коммуникации и неровности основного потолка</li>
            <li>- Большой выбор цветов и текстур</li>
           </ul>
         </DisclosurePanel>
       </Disclosure>
       <Disclosure v-slot="{ open }">
         <DisclosureButton
           class="flex w-full justify-between rounded-lg bg-dev-500 px-4 py-2 text-left text-lg font-medium text-orange-100 hover:bg-orange-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75"
         >
           <span>Сколько времени занимает установка натяжного потолка?</span>
           <ChevronUpIcon
             :class="open ? 'rotate-180 transform' : ''"
             class="h-5 w-5 text-orange-200"
           />
         </DisclosureButton>
         <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-gray-800">
           <ul>
            <li>- Установка стандартного натяжного потолка занимает от 3 до 5 часов</li>
            <li>- Сложные многоуровневые конструкции могут требовать больше времени</li>
           </ul>
         </DisclosurePanel>
       </Disclosure>
       <Disclosure v-slot="{ open }">
         <DisclosureButton
           class="flex w-full justify-between rounded-lg bg-dev-500 px-4 py-2 text-left text-lg font-medium text-orange-100 hover:bg-orange-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75"
         >
           <span>Можно ли установить натяжной потолок в ванной?</span>
           <ChevronUpIcon
             :class="open ? 'rotate-180 transform' : ''"
             class="h-5 w-5 text-orange-200"
           />
         </DisclosureButton>
         <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-gray-800">
           <ul>
            <li>- Да, натяжные потолки идеально подходят для ванных комнат благодаря своей влагостойкости</li>
            <li>- Они не боятся конденсата и не теряют своих эстетических качеств при высокой влажности</li>
           </ul>
         </DisclosurePanel>
       </Disclosure>
       <Disclosure v-slot="{ open }">
         <DisclosureButton
           class="flex w-full justify-between rounded-lg bg-dev-500 px-4 py-2 text-left text-lg font-medium text-orange-100 hover:bg-orange-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75"
         >
           <span>Как ухаживать за натяжным потолком?</span>
           <ChevronUpIcon
             :class="open ? 'rotate-180 transform' : ''"
             class="h-5 w-5 text-orange-200"
           />
         </DisclosureButton>
         <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-gray-800">
           <ul>
            <li>- Натяжные потолки не требуют особого ухода</li>
            <li>- Для очистки можно использовать мягкую ткань или губку с водой без абразивных средств</li>
           </ul>
         </DisclosurePanel>
       </Disclosure>
     </div>
   </div>
 </template>
 
 <script setup>
 import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
 import { ChevronUpIcon } from '@heroicons/vue/20/solid'
</script>
 