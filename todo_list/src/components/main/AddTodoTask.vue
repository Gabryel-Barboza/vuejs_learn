<template>
  <div class="p-3 bg-gray-600/50 todo-container border-l-green-300 border-l-2 rounded-sm">
    <div class="bg-gray-600">
      <input v-model="taskTitle" class="p-2" type="text" placeholder="Adicionar nova tarefa" />
    </div>
    <button
      @click="addTaskTitle"
      class="ml-2 text-green-300 text-2xl font-extrabold cursor-pointer"
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
</style>
