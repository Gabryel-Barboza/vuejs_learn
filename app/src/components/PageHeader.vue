<!--Primeiro componente, por boas práticas não nomeie componentes a partir de tags HTML-->

<!--Estrutura-->
<template>
  <!--Tag que é injetada com o conteúdo interior na tag do componente-->
  <!--Default slot-->
  <slot />
  <!--Named slots, acessa os slots com $slots
  se tiver declarado um slot title na origem é retornado o elemento h1-->
  <h1 v-if="$slots.title">
    <slot name="title" />
  </h1>
  <slot name="description" />
  <slot name="value" />
</template>

<!--Lógica-->
<script>
export default {
  mounted() {
    console.log(this.$slots);
  },
};
</script>

<!--Estilos -->
<style>
header {
  background: #000;
  color: #fff;
}
</style>
