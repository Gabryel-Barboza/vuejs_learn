import Fastify from 'fastify';
import cors from '@fastify/cors';
import { TaskId, TaskItemCreate } from '../src/schemas/TaskSchema';

const todos: TaskItemCreate[] = [
  {
    id: 1,
    title: 'Criar Lista de Tarefas com Componentes',
    description:
      'Faça um componente de lista de tarefas para a página principal, contendo um título, data de conclusão (yyyy/mm/dd), uma checkbox para determinar se está completa. Cada tarefa deve ser um componente que recebe os atributos por props.',
    dateCompleted: '2025/04/20',
    isFinished: false,
  },
  {
    id: 2,
    title: 'Criar Modal com a Descrição Completa de Cada Tarefa',
    description: 'Faça uma página ou modal para abrir a tarefa e mostrar todos os seus dados.',
    dateCompleted: '',
    isFinished: false,
  },
  {
    id: 3,
    title: 'Criar componente para adicionar novas tarefas',
    description:
      'Faça um componente que receba o título e clicando em um botão abra um modal para adicionar a descrição, nesse modal deve ter outro botão para finalizar a criação da tarefa.',
    dateCompleted: '',
    isFinished: false,
  },
];

const server = Fastify({ logger: true });

server.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

// Rota para endpoint raiz
server.get('/', async (request, response) => {
  response.type('text/html').code(200);

  return `<!DOCTYPE html>
  <html lang="pt-br">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>API</title>
      <style>
        a {
          background-color: lightgray;
        }
      </style>
    </head>
    <body>
      <h1>Bem vindo!</h1>
      <div>
        Endpoints:
        <ul>
          <li><a href="http://localhost:3000/todos">/todos</a></li>
        </ul>
      </div>
    </body>
  </html>`;
});

// Rota para recuperar lista de tarefas
server.get('/todos', async (request, response) => {
  response.type('application/json').code(200);

  return todos;
});

// Rota para recuperar tarefa por id
server.get<{ Params: TaskId }>('/todos/:id', async (request, response) => {
  response.type('application/json').code(200);

  return todos[request.params.id - 1];
});

// Rota para criar tarefas
server.post('/todos', async (request, response) => {
  const data = request.body as TaskItemCreate;
  data.id = todos.length + 1;

  todos.push(data);

  response.type('application/json').code(201);

  return data;
});

// Rota para atualizar tarefas por id
server.put<{ Params: TaskId }>('/todos/:id', async (request, response) => {
  const id = request.params.id;
  const data = request.body as Partial<TaskItemCreate>;
  const taskItem = {
    title: '',
    description: '',
    dateCompleted: '',
    isFinished: false,
  };

  for (const key of Object.keys(data)) {
    const hasKey = Object.hasOwn(taskItem, key);

    if (hasKey) {
      console.log('chegou!');
      todos[id - 1][key] = data[key];
    }
  }

  response.type('application/json').code(200);

  return {};
});

// Rota para remover tarefas por id
server.delete<{ Params: TaskId }>('/todos/:id', async (request, response) => {
  const id = request.params.id;
  todos.splice(id - 1, 1);

  response.type('application/json').code(204);

  return {};
});

server.listen({ port: 3000 }, (err, addr) => {
  if (err) console.warn('Error initializing server', err);
  else console.log(`Server listening on address ${addr}`);
});
