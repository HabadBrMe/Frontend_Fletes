<template>
    <div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">X</a>
        <a href="#">Resumen</a>
    <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Envios</a>
    <div class="collapse" id="collapseExample">
            <a href="#" class="dropdown-item">Mis envíos</a>
            <a href="#" class="dropdown-item">Acceso a cargas</a>
            <a href="#" class="dropdown-item">Nuevo envío</a>
            <a href="#" class="dropdown-item">Mis envíos en bloque</a>
            <a href="#" class="dropdown-item">Envíos corporativos</a>
            <a href="#" class="dropdown-item">Direcciones</a>
            <a href="#" class="dropdown-item">Gastos adicionales</a>
    </div>
    <a href="#">Ofertas</a>
    <a href="#">Reportes</a>
    <a href="#">Administración</a>
    <a href="#">Mis preguntas</a>
    <a href="#">Mensajes</a>
    <a href="#">Mis grupos</a>
    <a href="#">Mensajes</a>
    <a href="#">Calificaciones</a>
    </div>

    <div id="main">
        <button class="openbtn" v-on:click="openNav()" >☰</button>  
    </div>
</template>

<script>
export default {
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