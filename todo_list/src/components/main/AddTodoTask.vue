<template>
  <div
    class="todo-container flex justify-between p-3 bg-gray-600/50 min-w-[260px] w-9/10 max-w-[600px] border-l-green-300 border-l-2 rounded-sm"
  >
    <div class="bg-gray-600 w-full">
      <input
        @keydown.enter="addTaskTitle"
        v-model="taskTitle"
        class="todo-input p-2 w-full"
        type="text"
        placeholder="Adicionar nova tarefa"
      />
    </div>
    <button
      @click="addTaskTitle"
      class="p-1 ml-2 text-green-300 text-2xl font-extrabold cursor-pointer hover:bg-gray-600/20 active:text-amber-200"
    >
      +
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const taskTitle = ref(undefined);
const emit = defineEmits(['addTaskTitle']);

const addTaskTitle = () => {
  if (taskTitle.value === undefined) {
    window.alert('Não é possível criar tarefas sem um título!');
    return;
  }

  emit('addTaskTitle', taskTitle.value);
  taskTitle.value = undefined;
};
</script>
<style>
.todo-container {
  display: flex;
  align-items: center;
}

.todo-input:focus {
  outline: 1px solid #7bf1a8;
}
</style>
