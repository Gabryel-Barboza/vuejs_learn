<!--Componente principal, aqui é injetado todos os outros componentes-->
<template>
  <nav>
    <!--Roteamento, router-link ou RouterLink
    Como uma âncora, escolhe uma rota definida em router-->
    <router-link to="/">Home</router-link> |
    <!--Pode ser utilizada binds para recuperar a rota dinamicamente-->
    <router-link :to="{ name: 'services' }">Serviços</router-link> |
    <router-link to="/users/1">Usuários</router-link> |
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <!--RouterView define onde os componentes são renderizados para cada rota-->
  <router-view />
  <p>Nome: {{ $store.state.user.name }}</p>

  <!--Veja a view HomeView-->
</template>
<script>
export default {};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
