import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  // Pinia Composition API syntax

  // Importando variáveis ambiente com Vite
  const TODOS_ENDPOINT_URL = import.meta.env.VITE_API_BASE_URL + '/todos';
  const tasks = ref([]);

  const isTasks = () => (tasks.value.length ? true : false);

  // Actions == functions

  async function pullTasks() {
    const response = await axios.get(TODOS_ENDPOINT_URL);
    const taskList = response.data;

    tasks.value = taskList;
  }

  async function createTask(task: object) {
    const response = await axios.post(TODOS_ENDPOINT_URL, task);

    return response.status == 201 ? true : false;
  }

  async function removeTask(id: number) {
    const response = await axios.delete(TODOS_ENDPOINT_URL + `/${id}`);

    return response.status == 204 ? true : false;
  }

  return { tasks, isTasks, pullTasks, createTask, removeTask };
});
