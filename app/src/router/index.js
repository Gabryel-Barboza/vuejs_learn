import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

// Todas as rotas são inicializadas aqui
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, // Importação e carregamento direto, lazy-load é recomendado para outras
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
  },
  {
    // Rotas com parametrização
    path: '/users/:id',
    name: 'users-edit',
    component: () => import('../views/UserEditView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
