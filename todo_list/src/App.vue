<script lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/components/header/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  setup() {
    return { RouterView, NavBar };
  },
};
</script>

<template>
  <!--HMR = Hot Module Replacement, adiciona alterações sem perder o estado da app-->
  <header class="max-h-48 mb-5">
    <NavBar class="flex flex-0 flex-wrap justify-between items-center p-4 bg-black/20" />
  </header>
  <RouterView />
</template>

<style scoped></style>
