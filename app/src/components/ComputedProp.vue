<template>
  <!--Propriedades computadas-->
  <h2>Verifique no console</h2>
  {{ info }}
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Gabryel',
        age: 20,
      },
    };
  },
  // Propriedades computadas ou métodos para retornar valores agregados. É cacheada, ao contrário de métodos e reexecutadas apenas na alteração de suas dependências.
  computed: {
    info() {
      // Dependência: user
      return `Name: ${this.user.name} `;
    },
  },
};
</script>

<style></style>
