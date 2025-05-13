import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/styles.css';

// Cria variável global app para a instância com window.app, pode ser referenciado no console
window.app = createApp(App).mount('#app');
