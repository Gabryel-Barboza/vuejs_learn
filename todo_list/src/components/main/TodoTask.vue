<template>
  <div class="p-3 bg-gray-600/50 todo-container">
    <input v-model="taskFinished" class="mr-2 accent-green-300 container-input" type="checkbox" />

    <span
      @blur="editText"
      @keydown.enter="endEdit"
      id="todo-task-title"
      contenteditable
      class="font-bold container-title"
      >{{ title }}</span
    >
    <span class="p-1 ml-2 rounded-md shadow-md bg-green-300/10 container-date">{{
      dateCompleted
    }}</span>
    <span
      @click="deleteTask"
      class="p-2 cursor-pointer hover:text-gray-200 active:text-amber-200 container-trash"
    >
      <i class="fa-solid fa-trash"></i>
    </span>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';

export default {
  props: {
    task: { type: Object, required: true },
  },
  setup(props, ctx) {
    const id = props.task.id;
    const title = ref(props.task.title);
    const taskFinished = ref(props.task.isFinished);

    const dateCompleted = computed(() => {
      return taskFinished.value ? new Date().toLocaleDateString() : '';
    });

    const editText = ($evt: unknown) => {
      if (
        $evt &&
        typeof $evt === 'object' &&
        'target' in $evt &&
        $evt.target &&
        typeof $evt.target === 'object' &&
        'innerText' in $evt.target &&
        typeof $evt.target.innerText === 'string'
      ) {
        const text = $evt.target.innerText;
        title.value = text;
        ctx.emit('updateTaskTitle', id, text);
      }
    };

    const endEdit = () => {};

    const deleteTask = () => ctx.emit('deleteTask', id);

    return { title, dateCompleted, taskFinished, deleteTask, editText, endEdit };
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

  .container-trash {
    grid-column-start: 3;
    grid-row-start: 3;
    place-self: end;
  }
}
</style>
