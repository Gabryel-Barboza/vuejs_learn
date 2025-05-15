<template>
  <button @click="changeName('Kaio')">Mudar Nome</button>
  <!--Atributo não reativo!-->
  <p>{{ name }}</p>

  <!--Atributos reativos-->
  <button @click="user.name = 'Kaio'">Mudar nome</button>
  <p>{{ user }}</p>
  <p>{{ admin }}</p>
  <div>
    <AppProduct v-for="product in $store.state.products" :key="product.id" :product="product" />
  </div>
  <pre>
    {{ $store.state.cart }}
  </pre>
</template>
<script>
import AppProduct from '@/components/products/AppProduct.vue';
import { ref, reactive } from 'vue';

export default {
  components: {
    AppProduct,
  },
  // hooks beforeCreated e Created, objeto data() e methods são substituídos por
  setup() {
    // Não está disponível para ser acessado e não é reativo (não pode ser alterado dinamicamente)
    let name = 'Gabryel';
    console.log(name);

    // Adicionando reatividade aos atributos, reactive() para objetos e ref() para qualquer tipo de dados
    const user = reactive({ name: 'Gabryel', age: 20, height: 1.8 });

    const changeName = (newName) => {
      name = newName;
    };

    const admin = ref({ name: 'Admin', age: 'xx', height: 2.0 });
    // Ref encapsula atributos em .value, no template o VueJs retira o wrapper
    admin.value.age = 20;

    // Os atributos ficam disponíveis para a aplicação se retornados no objeto
    return {
      name,
      changeName,
      user,
      admin,
    };
  },
};
</script>
<style></style>
