import { createApp } from 'vue'
import './index.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import App from './App.vue'
import router from './router'

createApp(App).use(VueSmoothScroll).use(router).mount('#app')
