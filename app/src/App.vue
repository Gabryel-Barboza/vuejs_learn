<!--Componente principal, aqui é injetado todos os outros componentes-->
<template>
  <!-- Fechamento de tag opcional para componentes-->
  <PageHeader />

  <!--Diretivas em elementos HTML.
  Começam com v- para indicar diretivas do Vue;
  v-show recebe uma condição e exibe o elemento com a propriedade display apenas se verdadeira;
  v-if/v-else-if/v-else funciona como uma estrutura condicional padrão e adiciona o elemento se verdadeira, caso contrário remove o elemento HTML do documento, útil para esconder partes importantes;
   -->
  <PageHeader v-show="showHeader" />
  <PageHeader v-if="showHeader" />

  <!--Interpolação de Strings com {{  }}-->
  <div v-show="showName">Nome: {{ name }}</div>

  <!--Permite operações padrão de condicionais-->
  <div v-if="access === 'user'">User</div>
  <div v-else-if="access === 'marketing'">Marketing</div>
  <div v-else>Admin</div>

  <img alt="Vue logo" src="./assets/logo.png" />

  <!--Diretiva v-for-->
  <div>
    <!--Para o loop ocorrer, um array deve ser recebido de data(),
    para cada iteração realiza ações com esse objeto. v-bind:key ou apenas :key é necessária
    para identificar os elementos do array e reduzir o processamento, sendo um identificador único.
    Pode ser recebido o index do array, opcional-->
    <div v-for="(user, index) in array" v-bind:key="user.name" class="user-item">
      {{ index }}. <span>User: {{ user.name }}</span> <span>Age: {{ user.age }}</span>
      <span>Height: {{ user.height }}</span>
    </div>
  </div>

  <!--Diretiva v-bind
  Atributos dinâmicos-->
  <!--Recebe valores de atributos dinamicamente, com v-bind:atributo ou :atributo-->
  <img src="https://placehold.co/400" :alt="imgAlt" />

  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import PageHeader from './components/PageHeader.vue';

export default {
  // Objeto Js exportado para criar a página
  name: 'App',
  // Componentes injetados nesse objeto
  components: {
    HelloWorld,
    PageHeader,
  },
  // Atributos dos componentes
  data() {
    // Retorna um objeto de mapeamento para os componentes
    return {
      imgAlt: 'Imagem dinâmica',
      showHeader: false,
      name: 'Gabryel',
      showName: true,
      access: 'admin',
      array: [
        {
          name: 'Gabryel',
          age: 20,
          height: 1.8,
        },
        {
          name: 'Kaio',
          age: 19,
          height: 1.8,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.user-item {
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
</style>
