<template>
  <!--Começam com v- para indicar diretivas do Vue-->
  <!--v-show recebe uma condição e exibe o elemento com a propriedade display apenas se verdadeira
   -->
  <PageHeader v-show="showHeader" />

  <!-- v-if/v-else-if/v-else funciona como uma estrutura condicional padrão e adiciona o elemento se verdadeira, caso contrário remove o elemento HTML do documento, útil para esconder partes importantes-->
  <PageHeader v-if="showHeader" />

  <!--Interpolação de Strings com {{  }}-->
  <div v-show="showName">Nome: {{ name }}</div>

  <!--Permite operações padrão de condicionais-->
  <div v-if="access === 'user'">User</div>
  <div v-else-if="access === 'marketing'">Marketing</div>
  <div v-else>Admin</div>
</template>

<script>
import PageHeader from './PageHeader.vue';

export default {
  data() {
    return {
      showHeader: false,
      showName: true,
      name: 'Gabryel',
      access: 'admin',
    };
  },
  components: {
    PageHeader,
  },
};
</script>

<style></style>
