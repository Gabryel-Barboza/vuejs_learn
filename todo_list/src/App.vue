<script lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/components/header/NavBar.vue';
import FooterBar from '@/components/footer/FooterBar.vue';

export default {
  components: {
    NavBar,
    FooterBar,
  },
  setup() {
    return { RouterView };
  },
};
</script>

<template>
  <!--HMR = Hot Module Replacement, adiciona alterações sem perder o estado da app-->
  <header class="max-h-48 mb-5">
    <NavBar class="flex flex-0 flex-wrap justify-between items-center p-4 bg-black/20" />
  </header>
  <main class="h-[80vh] mt-10">
    <RouterView />
  </main>
  <footer>
    <FooterBar />
  </footer>
</template>

<style scoped></style>
