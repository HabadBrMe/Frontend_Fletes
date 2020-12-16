<template> 
    <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Fletes</a>
            <svg width="30" height="30" viewBox="0 0 16 16" class="bi bi-card-image" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9c0 .013 0 .027.002.04V12l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15 9.499V3.5a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm4.502 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div v-if="this.$store.state.autenticado == ''" class="collapse navbar-collapse" id="navbarText">
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
                        <router-link to="/login">Entrar</router-link> |
                        <router-link to="/register">Registrar</router-link> 
                    </div>
                </span>
            </div>
            <div v-else class="collapse navbar-collapse justify-content-center" id="navbarText">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link">CODIGO: XXXXXX</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">NOMBRE DE USUARIO</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        USUARIO
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="btn btn-outline-info btn-block">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
                                <path fill-rule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path d="M8 12c4 0 5 1.755 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12z"/>
                            </svg> Usuario</a>
                        <Blogout />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import Blogout from './Blogout.vue'
export default {
  name: 'Navbar',
  components: { Blogout },
}
</script>