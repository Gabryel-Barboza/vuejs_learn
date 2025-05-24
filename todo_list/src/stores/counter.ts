import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  // Pinia Composition API syntax
  const tasks = ref([
    {
      title: 'Criar Lista de Tarefas com Componentes',
      description: `
      Faça um componente de lista de tarefas para a página principal, contendo um título, data de conclusão (yyyy/mm/dd), uma checkbox para determinar se está completa. Cada tarefa deve ser um componente que recebe os atributos por props.
      `,
      completionDate: '',
      isFinished: false,
    },
    {
      title: 'Criar Modal com a Descrição Completa de Cada Tarefa',
      description: `
      Faça uma página ou modal para abrir a tarefa e mostrar todos os seus dados.
      `,
      completionDate: '',
      isFinished: false,
    },
  ]);

  return { tasks };
});
