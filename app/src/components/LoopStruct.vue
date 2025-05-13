<template>
  <!--Diretiva v-for-->
  <!--Para o loop ocorrer, um array deve ser recebido de data(),
  para cada iteração realiza ações com esse objeto. v-bind:key ou apenas :key é necessária
  para identificar os elementos do array e reduzir o processamento, sendo um identificador único.
  Pode ser recebido o index do array com (user, index) ou a chave e index com (user, chave, index) se objeto-->
  <div>
    <div v-for="(user, index) in array" v-bind:key="user.name" class="user-item">
      {{ index }}. <span>User: {{ user.name }}</span> <span>Age: {{ user.age }}</span>
      <span>Height: {{ user.height }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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

<style></style>
