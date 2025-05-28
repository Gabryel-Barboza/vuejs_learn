<template>
  <AddTodoTask @addTask="createTask" />
  <div v-if="showTasks" class="w-full max-w-2xl p-4 mt-4 flex flex-col gap-5 mb-8 bg-black/40">
    <TodoTask
      @deleteTask="removeTask"
      v-for="(task, index) in counterStore.tasks"
      :key="index"
      :task="task"
    />
  </div>
  <div v-else class="mt-5">
    <p class="text-gray-400">Você ainda não tem nenhuma tarefa...</p>
  </div>
</template>
<script setup lang="ts">
import TodoTask from '@/components/main/TodoTask.vue';
import AddTodoTask from '@/components/main/AddTodoTask.vue';
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue';

// Utilizando Pinia como State Manager
const counterStore = useCounterStore();
const showTasks = ref(false);

counterStore.pullTasks().then(() => (showTasks.value = counterStore.isTasks()));

const createTask = (task: object) => {
  counterStore
    .createTask(task)
    .then(() => counterStore.pullTasks())
    .then(() => (showTasks.value = true));
};

const removeTask = (id: number) => {
  counterStore
    .removeTask(id)
    .then(() => counterStore.pullTasks())
    .then(() => (showTasks.value = counterStore.isTasks()));
};
</script>
<style></style>
