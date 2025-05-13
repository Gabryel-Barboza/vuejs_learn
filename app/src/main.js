import { createApp } from 'vue';
import App from './App.vue';

// Cria variável global app para a instância com window.app
window.app = createApp(App).mount('#app');
