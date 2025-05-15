import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/styles.css';
import router from './router'; // Roteamento com Vue Router
import store from './store'; // Gerenciamento de estado com VUEX

// Cria variável global app para a instância com window.app, pode ser referenciado no console
window.app = createApp(App).use(store).use(router).mount('#app');
