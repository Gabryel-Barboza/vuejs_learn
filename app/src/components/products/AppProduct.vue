<template>
  <div class="card">
    {{ product.name }} - {{ product.price }}
    <!--Utilizando mutations-->
    <button @click="addProduct">Comprar</button>
    <button @click="removeProduct">Remover</button>
  </div>
</template>
<script>
export default {
  methods: {
    addProduct() {
      this.$store.commit('addProduct', this.product);
    },
    removeProduct() {
      this.$store.commit('removeProduct', this.product.id);
    },
  },
  props: {
    product: Object,
  },
};
</script>
<style scoped>
.card {
  background-color: bisque;
  padding: 5px;
  margin-bottom: 5px;
}
</style>
