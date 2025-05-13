<!--Componente principal, aqui é injetado todos os outros componentes-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <!-- Fechamento de tag opcional para componentes sem slots-->
  <HelloWorld msg="Welcome to Your Vue.js App" />

  <PageHeader><h1>Home</h1></PageHeader>

  <!--Diretivas VueJs-->
  <ConditionalStruct />
  <LoopStruct />
  <DataBinding />
  <EventMod />

  <!--Propriedades-->
  <ComputedProp />
  <WatchProp />

  <!--Lifecycle VueJs-->
  <LifeCycle v-if="showCycle" />
  <br />
  <!--Toggle para exemplificar unmount-->
  <button @click="showCycle = !showCycle">Toggle</button>

  <!--Slots-->
  <br />
  <PageHeader>
    <!--Usa o slot padrão-->
    Olá, mundo
    <!--slots nomeados-->
    <template v-slot:description>
      <p>Descrição em slots</p>
    </template>
    <!--Declara o uso do slot title, permite condicionais com $slots-->
    <template v-slot:title> Serviços </template>
  </PageHeader>

  <!--Escopo de Estilos
  Estilo global < estilo componente-->
  <BaseCard />
  <!--Sem scoped o estilo do componente pode ser aplicado em elementos-->
  <div class="card">Teste</div>

  <!--Props-->
  <BaseAlert variant="success">Seu formulário foi enviado com sucesso!</BaseAlert>
  <BaseAlert variant="fail">Houve uma falha ao enviar o formulário!</BaseAlert>

  <!--Emits, eventos emitidos de componentes filhos-->
  <BaseAlert v-if="showAlert" variant="success" @close="onClose()">Sucesso!</BaseAlert>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import PageHeader from './components/PageHeader.vue';
import ConditionalStruct from './components/ConditionalStruct.vue';
import LoopStruct from './components/LoopStruct.vue';
import DataBinding from './components/DataBinding.vue';
import EventMod from './components/EventMod.vue';
import ComputedProp from './components/ComputedProp.vue';
import WatchProp from './components/WatchProp.vue';
import LifeCycle from './components/LifeCycle.vue';

// @ é um atalho para a pasta raiz src, pode ser configurado
import BaseCard from '@/components/BaseCard.vue';
import BaseAlert from '@/components/BaseAlert.vue';

export default {
  // Objeto Js exportado para criar a página
  name: 'App',
  // Componentes injetados nesse objeto
  components: {
    HelloWorld,
    PageHeader,
    ConditionalStruct,
    LoopStruct,
    DataBinding,
    EventMod,
    ComputedProp,
    WatchProp,
    LifeCycle,
    BaseCard,
    BaseAlert,
  },
  // Métodos do objeto
  methods: {
    onClose() {
      console.log('close');
      this.showAlert = false;
    },
  },
  // Método de mapeamento dos atributos
  data() {
    // Retorna um objeto de mapeamento para os componentes
    return {
      showCycle: true,
      showAlert: true,
    };
  },
  computed: {},
  watch: {},
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
</style>
