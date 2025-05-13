<template>
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
</template>

<script>
export default {
  data() {
    return {
      imgAlt: 'Imagem dinâmica',
      isHome: true,
      name: 'Gabryel',
      contract: false,
      newsletter: '',
      sport: '',
      colors: [],
      // Propriedades que usam "-" devem ser substituídas para camelCase no objeto
      styleClass: { color: 'aqua', backgroundColor: 'black' },
    };
  },
};
</script>

<style>
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
