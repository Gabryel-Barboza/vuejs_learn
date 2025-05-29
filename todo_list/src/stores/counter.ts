import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { TaskItem } from '../schemas/TaskSchema';

export const useCounterStore = defineStore('counter', () => {
  // Pinia Composition API syntax

  // TODO: bug visual na exclusão de tarefas, no servidor é removido corretamente
  // Importando variáveis ambiente com Vite
  const TODOS_ENDPOINT_URL = import.meta.env.VITE_API_BASE_URL + '/todos';
  const tasks = ref([]);

  const isTasks = () => (tasks.value.length > 0 ? true : false);

  // Actions == functions

  async function pullTasks() {
    const response = await axios.get(TODOS_ENDPOINT_URL);

    if (response.status == 200) {
      const taskList = response.data;
      tasks.value = taskList;
    }
  }

  async function createTask(task: TaskItem) {
    const response = await axios.post(TODOS_ENDPOINT_URL, task);

    return response.status == 201 ? true : false;
  }

  async function updateTask(id: number, task: Partial<TaskItem>) {
    const response = await axios.put(TODOS_ENDPOINT_URL + `/${id}`, task);

    return response.status === 200 ? true : false;
  }

  async function removeTask(id: number) {
    const response = await axios.delete(TODOS_ENDPOINT_URL + `/${id}`);

    // Atualizar lista de tarefas local, não precisa recuperar do servidor
    if (response.status == 204) {
      tasks.value.splice(id - 1, 1);
      console.log(tasks);
    }

    return response.status === 204 ? true : false;
  }

  return { tasks, isTasks, pullTasks, createTask, updateTask, removeTask };
});
