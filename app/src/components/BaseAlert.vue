<template>
  <!--Variant é uma variável, logo pode ser usada para determinar o tipo de classe
  <div :class="['alert', { 'alert-success': variant == 'success', 'alert-fail': variant == 'fail' }]" >
    {{ text }}
  </div>
  -->
  <div :class="baseClass">
    <!--Slot semanticamente é utilizado para conteúdo e props para comportamento-->
    <slot />

    <!--Emits, evento de filho para pai-->
    <button @click="onClick">X</button>
  </div>
</template>
<script>
export default {
  // Permite passar valores de um componente pai para filho, pode ser usado um array para valores simples
  props: {
    variant: {
      type: String,
      default: '',
    },
    test: {
      type: String,
      default: 'test',
    },
  },
  computed: {
    baseClass() {
      return ['alert', this.variant ? `alert-${this.variant}` : ''];
    },
  },
  methods: {
    onClick() {
      // Enviando eventos para o elemento pai
      this.$emit('close');
      console.log('click');
    },
  },
  mounted() {
    console.log(this.test);
  },
};
</script>
<style scoped>
.alert {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-radius: 6px;
  color: blue;
  background-color: #ddd;
}
.alert-success {
  background-color: #10973d;
  color: white;
}
.alert-fail {
  background-color: #ce1f1f;
  color: black;
}
</style>
