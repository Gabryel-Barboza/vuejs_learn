<template>
  <div>
    <p>Informações da rota:</p>
    <p><pre>
    {{ $route }}
    </pre></p>
    <h2>ID do usuário: {{ $route.params.id }}</h2>
  </div>
  <div>
    <button @click="onClick">Login</button>
  </div>
</template>
<script>
export default {
  methods: {
    onClick() {
      console.log('Click!');
      this.$router.push({name: 'services'});
    }
  },
  created() {
    console.log(this.$route);
    console.log(this.$router);
  }
};
</script>
<style scoped>
p {
  text-align: left;
}
</style>
