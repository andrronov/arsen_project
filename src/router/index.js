import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
   {
      path: '/',
      name: 'landing',
      component: () => import("../pages/landing.vue")
   },
   {
      path: '/product/:id',
      name: 'product',
      component: () => import("../pages/product.vue")
   }
]

const router = createRouter({
   history: createWebHashHistory(),
   routes,
   scrollBehavior() {
     return { top: 0 };
   },
 })
 
 export default router;