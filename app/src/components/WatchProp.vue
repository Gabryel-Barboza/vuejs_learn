<template>
  <!--Watchers-->
  <input type="text" v-model="text" />
  {{ text }}
  <br />
  Objeto: <input type="text" v-model="user.name" />
  <br />
  Array:
  <input type="text" v-model="array[0].name" />
  <br />
  {{ user }}
  <br />
  {{ array[0] }}
</template>

<script>
export default {
  data() {
    return {
      text: '',
      user: {
        name: 'Gabryel',
        age: 20,
      },
      array: [
        {
          name: 'Gabryel',
          age: 20,
        },
        {
          name: 'Kaio',
          age: 21,
        },
      ],
    };
  },
  methods: {},
  // Observadores, executam ações em variáveis de mesmo nome da função.
  watch: {
    text(newValue, oldValue) {
      console.log(newValue, oldValue);
      // Recomenda-se implementar a lógica em methods
    },
    // Para observar o interior de objetos usa-se um objeto handler, o mesmo com arrays
    user: {
      handler() {
        console.log('User alterado!');
      },
      deep: true,
    },
    array: {
      handler() {
        console.log('Array alterado!');
      },
      deep: true,
    },
  },
};
</script>

<style></style>
