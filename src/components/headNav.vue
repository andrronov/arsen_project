<template>
   <Disclosure as="nav" class="bg-dev-500 sticky top-0 z-40" v-slot="{ open }">
     <header class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
       <div class="relative flex h-16 items-center justify-between">
         <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
           <!-- Mobile menu button-->
           <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
             <span class="absolute -inset-0.5" />
             <span class="sr-only">Open main menu</span>
             <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
             <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
           </DisclosureButton>
         </div>
         <div class="flex flex-1 items-center justify-center">
           <div class="hidden sm:block w-full">
             <div class="flex justify-between">
               <p v-for="item in nav" :key="item.name" @click.prevent="scrollToSection(item.href)" :class="[item.current ? 'bg-orange-900 text-white' : 'text-gray-300 hover:bg-orange-800 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined" class="cursor-pointer">{{ item.name }}</p>
             </div>
           </div>
         </div>
       </div>
      </header>
 
     <DisclosurePanel class="sm:hidden">
       <div class="space-y-1 px-2 pb-3 pt-2">
         <DisclosureButton v-for="item in nav" :key="item.name" @click.prevent="scrollToSection(item.href)" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
       </div>
     </DisclosurePanel>
   </Disclosure>
 </template>
 
 <script setup>
const props = defineProps({
  nav: {
    type: Array
  }
 })

 function scrollToSection(el){
  // mobileMenuOpen.value = false
  const section = document.getElementById(el)
  section.scrollIntoView({
    behavior: 'smooth',
        block: 'start',
  })
}

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
 import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
 </script>