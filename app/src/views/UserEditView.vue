<template>
  <div>
    <p>Informações da rota:</p>
    <pre>
    {{ $route }}
    </pre>
    <h2>ID do usuário: {{ $route.params.id }}</h2>
  </div>
  <div>
    <button @click="onClick">Login</button>
  </div>

  <VueX></VueX>
</template>
<script>
import VueX from '@/components/VueX.vue';

export default {
  components: {
    VueX,
  },
  methods: {
    onClick() {
      console.log('Click!');
      this.$router.push({ name: 'services' });
    },
  },
  created() {
    console.log(this.$route);
    console.log(this.$router);
  },
};
</script>
<style scoped>
pre {
  display: inline-block;
  background-color: lightgray;
}
</style>
