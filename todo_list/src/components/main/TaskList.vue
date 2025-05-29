<template>
  <AddTodoTask @addTaskTitle="createDescriptionModal" />

  <div v-if="showTasks" class="w-full max-w-2xl p-4 mt-4 flex flex-col gap-5 mb-8 bg-black/40">
    <TodoTask
      @updateTaskTitle="updateTaskTitle"
      @deleteTask="removeTask"
      v-for="(task, index) in counterStore.tasks"
      :key="index"
      :task="task"
    />
  </div>
  <div v-else class="mt-5">
    <p class="text-gray-400">Você ainda não tem nenhuma tarefa...</p>
  </div>
  <DescriptionModal v-if="showDescriptionModal" @addTaskDescription="createTask" />
</template>
<script lang="ts">
import AddTodoTask from '@/components/main/AddTodoTask.vue';
import DescriptionModal from '@/components/main/DescriptionModal.vue';
import TodoTask from '@/components/main/TodoTask.vue';
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue';

export default {
  components: { TodoTask, AddTodoTask, DescriptionModal },
  setup() {
    // Utilizando Pinia como State Manager
    const counterStore = useCounterStore();
    const showTasks = ref(false);
    const showDescriptionModal = ref(false);
    const taskObj = ref({ title: '', description: '', dateCompleted: '', isFinished: false });

    counterStore.pullTasks().then(() => (showTasks.value = counterStore.isTasks()));

    const createDescriptionModal = (title: string) => {
      taskObj.value.title = title;
      showDescriptionModal.value = true;
    };

    const createTask = (description: string) => {
      taskObj.value.description = description;
      showDescriptionModal.value = false;

      counterStore
        .createTask(taskObj.value)
        .then(() => counterStore.pullTasks())
        .then(() => (showTasks.value = true));
    };

    const updateTaskTitle = (id: number, title: string) => {
      counterStore.updateTask(id, { title: title });
    };

    const removeTask = (id: number) => {
      counterStore
        .removeTask(id)
        .then(() => counterStore.pullTasks())
        .then(() => (showTasks.value = counterStore.isTasks()));
    };

    return {
      counterStore,
      createDescriptionModal,
      createTask,
      removeTask,
      showTasks,
      showDescriptionModal,
      updateTaskTitle,
    };
  },
};
</script>
<style></style>
