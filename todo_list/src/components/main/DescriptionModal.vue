<template>
  <div
    class="absolute flex flex-col items-center gap-4 min-w-66 w-[70vw] max-w-110 p-4 bg-gray-800 border-2 border-black/40 rounded-sm shadow-lg/20 font-bold"
  >
    <label for="todo-task-textarea" class="text-md xs:text-lg"
      >Adicione uma <span class="text-green-300 font-extrabold">descrição</span> para sua
      tarefa</label
    >
    <textarea
      id="todo-task-textarea"
      class="self-center bg-gray-600/50 p-4 w-9/10 border-2 border-black/40 rounded-sm"
      v-model="description"
      rows="5"
      maxlength="500"
      placeholder="Colocar ração para o cachorro..."
      autofocus
    ></textarea>

    <button
      @click="addTaskDescription"
      class="p-2 rounded-md bg-gray-600 border-2 border-black/60 hover:text-green-300 hover:inset-shadow-sm/20 active:text-amber-200"
    >
      Criar tarefa
    </button>
  </div>
</template>
<script lang="ts">
import { ref, onBeforeUnmount } from 'vue';
export default {
  setup(props, ctx) {
    const description = ref('');

    const addTaskDescription = () => ctx.emit('addTaskDescription', description.value);

    onBeforeUnmount(() => {
      description.value = '';
    });

    return { description, addTaskDescription };
  },
};
</script>
<style scoped>
textarea {
  resize: none;
}

textarea:focus {
  outline: 1px solid #7bf1a8;
}
</style>
