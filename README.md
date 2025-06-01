# Aprendendo Vue.Js 🍃
Esse repositório contém projetos criados com o objetivo de aprender sobre esse framework para front-end.

O primeiro projeto criado foi o [app](https://github.com/Gabryel-Barboza/vuejs_learn/tree/main/app) e conta com os princípios dessa tecnologia utilizadas e separadas por componente na aplicação.

São os conceitos aprendidos durante a criação desse projeto:
* [Criando SFCs](https://github.com/Gabryel-Barboza/vuejs_learn/blob/main/app/src/views/HomeView.vue)
* [Scoped](https://github.com/Gabryel-Barboza/vuejs_learn/blob/main/app/src/components/BaseCard.vue)
* [Computed Props](https://github.com/Gabryel-Barboza/vuejs_learn/blob/main/app/src/components/ComputedProp.vue)
* [Watchers](https://github.com/Gabryel-Barboza/vuejs_learn/blob/main/app/src/components/WatchProp.vue)
* [Diretivas condicionais](https://github.com/Gabryel-Barboza/vuejs_learn/blob/main/app/src/components/ConditionalStruct.vue)
* [Diretiva Loop](https://github.com/Gabryel-Barboza/vuejs_learn/blob/main/app/src/components/LoopStruct.vue)
* [Data Binding](https://github.com/Gabryel-Barboza/vuejs_learn/blob/main/app/src/components/DataBinding.vue)
* [Eventos](https://github.com/Gabryel-Barboza/vuejs_learn/blob/main/app/src/components/EventMod.vue)
* [Props e Emits](https://github.com/Gabryel-Barboza/vuejs_learn/blob/main/app/src/components/BaseAlert.vue)
* [Hooks](https://github.com/Gabryel-Barboza/vuejs_learn/blob/main/app/src/components/LifeCycle.vue)
* [Vue Router](https://github.com/Gabryel-Barboza/vuejs_learn/blob/main/app/src/App.vue)
* [VUEX State Manager](https://github.com/Gabryel-Barboza/vuejs_learn/blob/main/app/src/components/VueX.vue)
* [Mixins](https://github.com/Gabryel-Barboza/vuejs_learn/blob/main/app/src/components/products/AppProducts.vue)
* [Composition API](https://github.com/Gabryel-Barboza/vuejs_learn/tree/main/app/src/components/composition)

## Como criar novos projetos em Vue.Js⚡
O VueJs permite inicializar projetos utilizando sua interface de linha de comando `vue cli`, isso para criar projetos em versões mais antigas.
* Iniciar novo projeto `vue create project_name`
* Adicionar extensões `vue add vuex`

Com novas tecnologias emergentes, a criação do Vite pelo mesmo desenvolvedor do VueJs trouxe uma repaginação para a criação de projetos. O Vite além de ser uma build tool, também desempenha o papel de servidor com tecnologias modernas, incluindo Hot Module Replacement (HMR) e outras funcionalidades.

Assim, para inicializar projetos utilizando a versão moderna do VueJs com Vite:
* Use o comando `npm create vue@latest`
* Seleciona as dependências necessárias do projeto como Vue Router, Pinia (Substituto moderno do VUEx para gerenciamento de estado), TypeScript e outros...

## Aprofundando conceitos 📜
Os padrões e comportamentos aprendidos durante o primeiro projeto são aprofundados em um projeto completo VueJs, seguindo o padrão moderno com Vite como build tool e servidor, Composition API, Pinia para gerenciamento de estados, Roteamento com Vue Router, TypeScript e Tailwind CSS para estilização. 

O desenvolvimento de uma [TODO List](https://github.com/Gabryel-Barboza/vuejs_learn/tree/main/todo_list) é o objetivo desse projeto para aplicar os conceitos do Vue.Js.

Para armazenar a lista de tarefas e simular um banco de dados, foi desenvolvida uma minimal API com Fastify. A API possui endpoints para realizar um CRUD com a lista de tarefas.

![Captura de tela de 2025-06-01 02-22-51](https://github.com/user-attachments/assets/e4bc6bed-8560-4f96-8455-31b98ba49e58)

Com o uso do Tailwind, a aplicação foi desenvolvida com o padrão mobile-first, permitindo responsividade desde telas pequenas até desktops.
* Mobile

![Captura de tela de 2025-06-01 02-23-51](https://github.com/user-attachments/assets/5e9cf5f7-47ec-48d1-97bb-06b459f850bd)

![Captura de tela de 2025-06-01 02-24-23](https://github.com/user-attachments/assets/7c8e4a38-35ee-482c-8fcf-fef3477b6e11)

* Desktop
![Captura de tela de 2025-06-01 02-25-15](https://github.com/user-attachments/assets/0a572840-1258-4f9e-ab29-9b361bd986f8)
![Captura de tela de 2025-06-01 02-25-31](https://github.com/user-attachments/assets/41272539-3744-4c79-a6d4-05aba98f6f00)


