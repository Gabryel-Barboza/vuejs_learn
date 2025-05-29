<template>
  <div>
    <RouterLink to="/">
      <img alt="Vue logo" src="@/assets/logo.svg" width="25" height="25" />
    </RouterLink>
    <BurgerMenu v-if="windowSize <= 640" />
    <nav v-else class="flex justify-end gap-8 w-1/2">
      <ul>
        <li
          class="inline-block p-2 text-center text-green-300 font-bold hover:bg-black/20"
          v-for="(route, index) in $router.options.routes"
          :key="index"
        >
          <RouterLink class="uppercase" :to="{ name: route.name }">{{ route.name }}</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<!--atributo setup indica o hook setup() e o bloco é acessível ao template, não precisa de retorno-->
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import BurgerMenu from '@/components/header/BurgerMenu.vue';

const windowSize = ref(window.innerWidth);
window.onresize = () => (windowSize.value = window.innerWidth);
</script>
<style></style>
