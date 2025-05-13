<template>
  <!--Diretiva v-on: ou @
  Eventos-->
  <button @click="onClick">Clique aqui!</button>
  <!--Modificadores de eventos
  .prevent para prevenir ação do evento, nesse caso redirecionamento.
  Muitos outros modificadores de evento na documentação
  -->
  <form action="https://google.com">
    <input @submit.prevent="onSubmit" type="submit" value="Enviar" />
  </form>

  <input @keyup="onKeyUp" type="text" />
  <hr />
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClick($evt) {
      window.alert(`Click! ${$evt}`);
    },
    onSubmit($evt) {
      console.log('Submit.', $evt);
    },
    onKeyUp($evt) {
      console.log('KeyUp', $evt);
    },
  },
};
</script>

<style></style>
