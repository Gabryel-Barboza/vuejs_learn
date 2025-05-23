<template>
  <div>
    <TodoTask
      v-for="(task, index) in counterStore.tasks"
      :key="index"
      :title="task.title"
      :completion-date="task.completionDate"
      :is-finished="task.isFinished"
    />
  </div>
</template>
<script setup lang="ts">
import TodoTask from '@/components/main/TodoTask.vue';
import { useCounterStore } from '@/stores/counter';

// Utilizando Pinia como State Manager
const counterStore = useCounterStore();
</script>
<style></style>
