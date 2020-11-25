<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/Nosotros">Nosotros</router-link> |
    <router-link to="/Avisos">Avisos Legales</router-link> |
    <router-link to="/SoyClienteEnvia">Soy Cliente que Envia</router-link> |
    <router-link to="/SoyTransportista">Soy Transportista</router-link> 
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
