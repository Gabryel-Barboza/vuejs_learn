<template>
  <div class="p-3 bg-gray-600/50 todo-container">
    <input class="mr-2 accent-green-300 container-input" type="checkbox" v-model="taskFinished" />
    <span class="font-bold container-title">{{ title }}</span>
    <span class="container-date p-1 ml-2 rounded-md shadow-md bg-green-300/10">{{
      completionDate
    }}</span>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';

export default {
  props: {
    task: { type: Object, required: true },
  },
  setup(props) {
    const title = ref(props.task.title);
    const taskFinished = ref(props.task.isFinished);

    const completionDate = computed(() => {
      return taskFinished.value ? new Date().toLocaleDateString() : '';
    });

    return { title, completionDate, taskFinished };
  },
};
</script>

<style scoped>
.todo-container {
  display: flex;
  align-items: center;
}

.container-title {
  width: 90%;
}

@media screen and (min-width: 500px) {
  .todo-container {
    display: grid;
    grid-template-columns: 20px 1fr max-content;
    grid-template-rows: repeat(2, minmax(30px, max-content)) 30px;
  }

  .container-input {
    grid-row-start: 2;
  }
  .container-title {
    grid-row-start: 2;
  }
  .container-date {
    grid-column-start: 3;
  }
}
</style>
