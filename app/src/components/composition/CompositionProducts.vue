<template>
  <button @click="changeName('Kaio')">Mudar Nome</button>
  <!--Atributo não reativo!-->
  <p>{{ name }}</p>

  <!--Atributos reativos-->
  <button @click="user.name = 'Kaio'">Mudar nome</button>
  <p>{{ user }}</p>
  <p>{{ admin }}</p>
  <p>{{ info }}</p>

  <!--Composition Hooks-->
  <AppHook v-if="showAppHook" />
  <button @click="showAppHook = !showAppHook">Toggle</button>

  <!--Composition prop e events-->
  <AppButton variant="fail" @update="getUpdate" />
  <div>
    <AppProduct v-for="product in $store.state.products" :key="product.id" :product="product" />
  </div>
</template>
<script>
import AppProduct from '@/components/products/AppProduct.vue';
import AppHook from './AppHook.vue';
import AppButton from './AppButton.vue';

// Na composition API as funcionalidades são importadas, usando apenas o necessário
import { ref, reactive, computed, watch } from 'vue';

export default {
  // É possível utilizar apenas uma, escolha Composition ou Options API
  components: {
    AppProduct,
    AppHook,
    AppButton,
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

    // Computed properties
    const info = computed(() => {
      return `=== Nome: ${user.name} Idade: ${user.age} Altura: ${user.height} ===`;
    });

    // Watchers
    // Para observar campos únicos em objetos, utilize um callback com retorno desse campo no lugar do objeto reativo
    watch(
      user,
      () => {
        console.log('User alterado!');
      },
      { deep: true }
    );

    // Hooks
    const showAppHook = ref(true);

    // Emits
    const getUpdate = (data) => {
      console.log('update', data);
    };

    // Os atributos ficam disponíveis para a aplicação se retornados no objeto
    return {
      name,
      changeName,
      user,
      admin,
      info,
      showAppHook,
      getUpdate,
    };
  },
};
</script>
<style></style>
