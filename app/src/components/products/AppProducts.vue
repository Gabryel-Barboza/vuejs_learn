<template>
  <div>
    <AppProduct v-for="product in $store.state.products" :key="product.id" :product="product" />
  </div>
  <pre>
    {{ $store.state.cart }}
  </pre>
  {{ calculateDiscount() }}
</template>
<script>
import AppProduct from './AppProduct.vue';
import CalculateDiscountMixin from './CalculateDiscountMixin.vue';

export default {
  components: {
    AppProduct,
  },
  // Mixins são módulos de código compartilhados, padrão na Options API.
  mixins: [CalculateDiscountMixin],
};
</script>
<style></style>
