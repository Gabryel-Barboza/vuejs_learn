// Otimizados pelo Vite se assets na pasta src, assets em public são apenas copiados
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Instancia o app principal a partir do componente App
const app = createApp(App);

// Instancia as extensões do Vue
app.use(createPinia());
app.use(router);

// Monta o componente principal na div de id app, pode ser montado mais de um app
app.mount('#app');
