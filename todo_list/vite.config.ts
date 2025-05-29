import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // Extensões para o Vite, adicionando tailwindcss
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      // Objeto import para recuperar variáveis de ambiente em .env, disponível pelo Vite
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Alterando configurações do app
  server: {
    port: 3002,
  },
  build: {
    outDir: 'build',
  },
});
