import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//Анимация
import AosVue from "aos-vue";

createApp(App).use(AosVue).use(store).use(router).mount('#app')
