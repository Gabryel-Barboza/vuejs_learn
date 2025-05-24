<template>
  <div class="w-full max-w-2xl p-4 flex flex-col gap-5 bg-black/40">
    <TodoTask v-for="(task, index) in counterStore.tasks" :key="index" :task="task" />
  </div>
</template>
<script setup lang="ts">
import TodoTask from '@/components/main/TodoTask.vue';
import { useCounterStore } from '@/stores/counter';

// Utilizando Pinia como State Manager
const counterStore = useCounterStore();
</script>
<style></style>
