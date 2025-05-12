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
  Atributos dinâmicos e one-way data binding-->
  <!--Recebe valores de atributos dinamicamente, com v-bind:atributo ou :atributo-->
  <img src="https://placehold.co/400" :alt="imgAlt" />

  <!--V-bind para classes possui a característica de permitir utilizar objetos e arrays para defini-lás -->
  <h2 :class="[{ title: true, home: isHome }, 'text']">Olá, Mundo!</h2>
  <!--O mesmo ocorre em atributos style-->
  <p :style="styleClass">Este é um texto de testes</p>

  <!--Diretiva v-model-->
  <!--Two-ways data binding-->
  <div>
    <!--A alteração da variável pode ser feita tanto pelo código como pelo formulário-->
    <label>Nome</label>
    <input v-model="name" type="text" />
    {{ name }}
  </div>

  <div>
    <label>Esporte favorito: </label>
    <select v-model="sport">
      <option value="">Escolha</option>
      <option value="futebol">futebol</option>
      <option value="natação">natação</option>
    </select>
    {{ sport }}
  </div>

  <div>
    <label>Newsletter: </label>
    <input v-model="newsletter" type="radio" value="sim" /> Sim
    <input v-model="newsletter" type="radio" value="não" /> Não<br />
    {{ newsletter }}
  </div>

  <div>
    <label>Termos de uso</label> <br />
    <input v-model="contract" type="checkbox" /> Aceita nossos termos?<br />
    {{ contract }}
  </div>

  <div>
    <label>Cores favoritas</label><br />
    <input v-model="colors" type="checkbox" value="azul" /> Azul
    <input v-model="colors" type="checkbox" value="amarelo" /> Amarelo<br />
    {{ colors }}
  </div>

  <!--Diretiva v-on: ou @
  Eventos-->
  <button @click="onClick">Clique aqui!</button>
  <!--Modificadores de eventos
  .prevent para prevenir ação do evento, nesse caso redirecionamento.
  Muitos outros modificadores de evento na documentação
  -->
  <form action="https://google.com">
    <input @submit.prevent="onSubmit" type="submit" value="Enviar"/>
  </form>

  <input @keyup="onKeyUp" type="text" />

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
  // Métodos para eventos
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
  // Atributos dos componentes
  data() {
    // Retorna um objeto de mapeamento para os componentes
    return {
      imgAlt: 'Imagem dinâmica',
      isHome: true,
      showHeader: false,
      name: 'Gabryel',
      contract: false,
      newsletter: '',
      sport: '',
      colors: [],
      showName: true,
      access: 'admin',
      // Propriedades que usam "-" devem ser substituídas para camelCase no objeto
      styleClass: { color: 'aqua', backgroundColor: 'black' },
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

.title {
  font-size: 2rem;
  font-style: italic;
  color: red;
}

.text {
  text-align: justify;
}
</style>
