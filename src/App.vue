<template>
  <div id="nav">  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Fletes</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Nosotros</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/Contactos">Contactos</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/Avisos">Avisos Legales</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/SoyClienteEnvia">Soy Cliente que Envia</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/SoyTransportista">Soy Transportista</router-link>
            </li>
            </ul>
            <span class="navbar-text">
            <div id="nav">
                <router-link to="/login">Login</router-link> |
                <router-link to="/register">Register</router-link> 
            </div>
            </span>
        </div>
    </nav>
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
