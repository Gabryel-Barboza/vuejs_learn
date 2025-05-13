<template>
  <!--Lifecycle VueJs-->
  <!--Fases de 
  criação: preparar o componente, não tem acesso ao template (DOM); 
  montagem: inicializar lib externa, precisa e tem acesso ao DOM; 
  atualização: debug, presente no update;
  desmontagem: remover recursos da memória-->
  <!--Hooks são aplicados nesse lifecycle-->
  <div><p>Lifecycle de componentes</p></div>
  <input v-model="name" type="text" />
</template>

<script>
export default {
  data() {
    return {
      name: 'Gabryel',
    };
  },
  // Hooks Vue.Js
  beforeCreate() {
    console.log('beforeCreate');
    console.log(this.name);
  },
  created() {
    console.log('created');
    // Só possui acesso ao estado do componente nesta fase
    console.log(this.name);
    console.log(this.$el);
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    // Só possui acesso ao DOM nesta fase
    console.log('mounted');
    console.log(this.$el);
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style></style>
