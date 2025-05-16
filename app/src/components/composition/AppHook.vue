<template>
  <div>App Hook</div>
</template>
<script>
// Hook de criação no próprio setup
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
export default {
  setup() {
    // Montagem
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');
    });
    // Atualização
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    // Desmontagem
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
  },
};
</script>
<style></style>
