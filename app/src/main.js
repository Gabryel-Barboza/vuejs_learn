import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/styles.css';
import router from './router'

// Cria variável global app para a instância com window.app, pode ser referenciado no console
window.app = createApp(App).use(router).mount('#app');
