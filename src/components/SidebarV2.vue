<template>
    <div id="mySidebar" class="sidebar bg-dark" v-if="this.$store.state.autenticado == 'Transportista'">
      <ul class="nav nav-tabs">

            <li class="nav-item">
                <a class="nav-link active" href="#">Resumen</a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Mensajes</a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Resibidos</a>
                <a class="dropdown-item" href="#">Enviados</a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Cargas</a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Mis Cargas</a>
                <a class="dropdown-item" href="#">Buscar Cargas</a>
                <a class="dropdown-item" href="#">Tracking</a>
                <a class="dropdown-item" href="#">Mis Cargas en bloque</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Mis Ofertas</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Mis Calificaciones</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Mis Preguntas</a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Mis Veiculos</a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Mis Veiculos</a>
                <a class="dropdown-item" href="#">Mis Choferes</a>

            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Administracion</a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Usuarios</a>
                <a class="dropdown-item" href="#">Mis Grupos</a>
                <a class="dropdown-item" href="#">ETC..</a>

            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Facturacion</a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Gastos Adicionales</a>
                <a class="dropdown-item" href="#">Prefactura</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Documentos</a>
            </li>

        </ul>
    </div>
    <div id="mySidebar" class="sidebar bg-dark" v-if="this.$store.state.autenticado == 'Cliente que envia'">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">X</a>
      <a href="#">Resumen</a>
      <a href="#">Mensajes</a>
      <a data-toggle="collapse" href="#envios" role="button" aria-expanded="false" aria-controls="collapseExample">Envios</a>
      <div class="collapse" id="envios">
              <a href="#" class="dropdown-item">Mis envíos</a>
              <a href="#" class="dropdown-item">Acceso a cargas</a>
              <a href="#" class="dropdown-item">Nuevo envío</a>
              <a href="#" class="dropdown-item">Mis envíos en bloque</a>
              <a href="#" class="dropdown-item">Envíos corporativos</a>
              <a href="#" class="dropdown-item">Direcciones</a>
              <a href="#" class="dropdown-item">Gastos adicionales</a>
      </div>
      <a href="#">Ofertas</a>
      <a href="#">Calificaciones</a>
      <a href="#">Preguntas</a>
      <a href="#">Mis grupos</a>
      <a href="#">Administración</a>
      <a href="#">Reportes</a>
      <button>Usuario</button>
      <Blogout />
    </div>
    <div id="mySidebar" class="sidebar bg-dark" v-if="this.$store.state.autenticado == 'Monitorista'">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">X</a>
      <a href="#">Monitoreo</a>
      <a href="#">Historial</a>
      <Blogout />
    </div>
    <div id="main">
        <button class="openbtn btn btn-dark" v-on:click="openNav()" >☰ Menu {{this.$store.state.autenticado}}</button>  
    </div>
</template>

<script>
import Blogout from './Blogout.vue'
//import Blogout from '../components/Blogout.vue'
export default {
  components: { Blogout },
    name: 'sidebar',
    methods: {
        openNav() {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.visibility = "hidden";
        },
        closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.visibility = "visible";
        }
    }
}
</script>
<style scoped>
.sidebar {
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s;
  text-align: left;
  width: 0;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  color: #818181;
  display: block;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 20px;
}

#main {
    position: absolute;
    top: 60px;
    transition: margin-left 1.5s;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
</style>