<template>
  <div>
    <form @submit="save">
      <label> Name:<input type="text" v-model="user.name" /> </label>
      <label> Age: <input type="number" v-model="user.age" /> </label>
      <label> Height: <input type="text" v-model="user.height" /> </label>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '',
        age: 0,
        height: '',
      },
    };
  },
  methods: {
    save() {
      // Método de mutação de estado
      this.$store.commit('storeUser', this.user);
      console.log('Estado em commit:', this.$store.state);

      // Método de ação com contexto, similar a mutation, porém assíncrono.
      this.$store.dispatch('storeUser', this.user).then(() => console.log('terminou!'));
    },
  },
};
</script>
<style></style>
