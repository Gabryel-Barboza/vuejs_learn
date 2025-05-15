import { createStore } from 'vuex';

export default createStore({
  // Armazena estados (objetos) da aplicação
  state: {
    user: {
      name: 'Gabryel',
      age: 20,
      height: 1.8,
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100,
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200,
      },
      {
        id: 3,
        name: 'Meião',
        price: 50,
      },
    ],
    cart: [],
  },
  // Realiza mutações (alterações) em estados
  mutations: {
    storeUser(state, data) {
      console.log('Estado:', state);
      // Recebe data da função commit
      state.user = data;
    },
    addProduct(state, data) {
      state.cart.push(data);
    },
    removeProduct(state, id) {
      const idx = state.cart.findIndex((o) => o.id == id);
      state.cart.splice(idx, 1);
    },
  },
  // Similar as mutations, porém possui o contexto de $store (mutations, getters, actions...)
  // Utilizada para tarefas assíncronas, mutations para síncronas
  actions: {
    storeUser(context, data) {
      // Recebe data da função dispatch
      console.log('Contexto:', context, '\nData:', data);
      console.log('Total:' + context.getters.total);

      // É recomendado deixar a cargo das mutations, evita desorganização e centraliza a lógica para salvar dados
      context.state.user = data;
      // Use commits
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          console.log('aqui');
          //context.commit('storeUser', data);
        }, 3000);
      });
    },
  },
  // Similar a computed properties, é recalculado para cada alteração em suas dependências
  getters: {
    // Dependência: cart
    total(state) {
      return state.cart.reduce((total, item) => (total += item.price), 0);
    },
  },
  //
  modules: {},
});
