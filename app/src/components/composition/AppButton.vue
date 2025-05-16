<template>
  <button @click="sendData">
    <slot></slot>
    <slot name="principal"></slot>
  </button>
</template>
<script>
export default {
  setup(props, ctx) {
    // Props
    console.log(props.variant);

    // Context do componente
    console.log(ctx.slots);
    console.log(ctx.emit);

    const sendData = () => {
      ctx.emit('update', true);
    };

    return {
      sendData,
    };
  },
  // Props são definidas da mesma maneira e passadas por parâmetro em setup
  props: {
    variant: {
      type: String,
      default: 'success',
    },
  },
};
</script>
<style></style>
