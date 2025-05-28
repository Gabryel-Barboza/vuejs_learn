import Fastify from 'fastify';
import cors from '@fastify/cors';

interface TodoId {
  id: number;
}

interface TodoItem {
  id: number;
  title: string;
  description: string;
  completionDate: string;
  isFinished: boolean;
}

const todos: TodoItem[] = [
  {
    id: 1,
    title: 'Criar Lista de Tarefas com Componentes',
    description:
      'Faça um componente de lista de tarefas para a página principal, contendo um título, data de conclusão (yyyy/mm/dd), uma checkbox para determinar se está completa. Cada tarefa deve ser um componente que recebe os atributos por props.',
    completionDate: '',
    isFinished: false,
  },
  {
    id: 2,
    title: 'Criar Modal com a Descrição Completa de Cada Tarefa',
    description: 'Faça uma página ou modal para abrir a tarefa e mostrar todos os seus dados.',
    completionDate: '',
    isFinished: false,
  },
];

const server = Fastify({ logger: true });

server.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'DELETE'],
});

server.get('/', async (request, response) => {
  response.type('text/html').code(200);

  return `<!DOCTYPE html>
  <html lang="pt-br">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>API</title>
      <style>
        code {
          background-color: lightgray;
        }
      </style>
    </head>
    <body>
      <h1>Bem vindo!</h1>
      <div>
        Endpoints:
        <ul>
          <li><code>/todos</code></li>
        </ul>
      </div>
    </body>
  </html>`;
});

server.get('/todos', async (request, response) => {
  response.type('application/json').code(200);

  return todos;
});

server.get<{ Params: TodoId }>('/todos/:id', async (request, response) => {
  response.type('application/json').code(200);

  return todos[request.params.id - 1];
});

server.post('/todos', async (request, response) => {
  const data = request.body as TodoItem;
  data.id = todos.length + 1;

  todos.push(data);

  response.type('application/json').code(201);

  return data;
});

server.delete<{ Params: TodoId }>('/todos/:id', async (request, response) => {
  const id = request.params.id;
  todos.splice(id - 1, 1);

  response.type('application/json').code(204);

  return {};
});

server.listen({ port: 3000 }, (err, addr) => {
  if (err) console.warn('Error initializing server', err);
  else console.log(`Server listening on address ${addr}`);
});
