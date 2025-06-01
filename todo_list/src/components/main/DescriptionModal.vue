<template>
  <div
    class="description-container absolute flex flex-col items-center gap-4 min-w-[265px] w-[70vw] max-w-[460px] p-4 bg-gray-800 border-2 border-black/40 rounded-sm shadow-lg/20 font-bold"
  >
    <label for="todo-task-textarea" class="text-md xs:text-lg"
      >Adicione uma <span class="text-green-300 font-extrabold">descrição</span> para sua
      tarefa</label
    >
    <textarea
      id="todo-task-textarea"
      class="self-center bg-gray-600/50 p-4 w-9/10 border-2 border-black/40 rounded-sm"
      @keydown.enter="addTaskDescription"
      v-model="description"
      rows="5"
      maxlength="500"
      placeholder="Colocar ração para o cachorro..."
      autofocus
    ></textarea>

    <div class="flex justify-between w-9/10">
      <button
        @click="$emit('cancelTask')"
        class="p-2 rounded-md bg-gray-600 border-2 border-black/60 hover:text-green-300 hover:inset-shadow-sm/20 active:text-amber-200"
      >
        Cancelar
      </button>
      <button
        @click="addTaskDescription"
        class="p-2 rounded-md bg-gray-600 border-2 border-black/60 hover:text-green-300 hover:inset-shadow-sm/20 active:text-amber-200"
      >
        Criar tarefa
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['addTaskDescription', 'cancelTask']);
const description = ref('');

const addTaskDescription = () => emit('addTaskDescription', description.value);
</script>
<style scoped>
textarea {
  resize: none;
}

textarea:focus {
  outline: 1px solid #7bf1a8;
}

.description-container {
  top: 110px;
}
</style>
