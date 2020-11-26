<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Fletes</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link> |
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
                <router-link to="/Contactos">Contactos</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
                <router-link to="/Avisos">Avisos Legales</router-link> |
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
                <router-link to="/SoyClienteEnvia">Soy Cliente que Envia</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
                <router-link to="/SoyTransportista">Soy Transportista</router-link>
            </li>
            </ul>
            <span class="navbar-text">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/Contactos">Contactos</router-link> 
            </div>
            </span>
        </div>
        <router-view/>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
</style>
