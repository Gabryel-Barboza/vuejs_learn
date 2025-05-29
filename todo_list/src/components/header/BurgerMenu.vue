<template>
  <div class="w-9/10 flex justify-end">
    <div
      @click="showMenu = !showMenu"
      class="w-max p-4 rounded-md cursor-pointer hover:bg-black/20 hover:font-bold active:text-amber-200"
    >
      <i class="fa-solid fa-bars"></i>
    </div>
  </div>
  <nav v-if="showMenu" class="w-full p-2 border-t-2 border-black/10">
    <ul>
      <li
        class="max-w-5/10 p-2 ml-auto mr-auto text-center text-green-300 font-bold hover:bg-black/20"
        v-for="(route, index) in $router.options.routes"
        :key="index"
      >
        <RouterLink class="uppercase active:text-green-500" :to="{ name: route.name }">{{
          route.name
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const showMenu = ref(false);
</script>
