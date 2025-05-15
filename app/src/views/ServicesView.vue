<template>
  <div>Serviços</div>
  <!--Métodos getters-->
  {{ $store.getters.total }}
  <AppProducts />

  <h1>Composition API</h1>
  <CompositionProducts />
</template>
<script>
import AppProducts from '@/components/products/AppProducts.vue';
import CompositionProducts from '@/components/composition/CompositionProducts.vue';

export default {
  components: {
    AppProducts,
    CompositionProducts,
  },
};
</script>
<style></style>
