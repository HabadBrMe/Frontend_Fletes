<template>
  <div class="mensajes row justify-content-md-center" id="mensajes">
        <div class="col-9">
            <ul class="nav nav-tabs row justify-content-md-center m-1">
            <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#Mrecibidos" role="button" aria-expanded="false" aria-controls="publicar">
                Mensajes Recibidos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#Menviados" role="button" aria-expanded="false" aria-controls="envios">
                Mensajes Enviados</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#Nmensaje" role="button" aria-expanded="false" aria-controls="gastos">
                Nuevo Mensaje</a>
            </li>
            </ul>
        <div class="card collapse show" id="Mrecibidos" data-parent="#mensajes">
            <Mensajes titulo="Recibidos" tipo="De" />
        </div>
        <div class="card collapse" id="Menviados" data-parent="#mensajes">
            <Mensajes titulo="Enviados" tipo="Para" />
        </div>
        <div class="card collapse" id="Nmensaje" data-parent="#mensajes">
            <h1>Nuevo mensaje</h1>
        </div>
        </div>
  </div>
</template>

<script>

import Mensajes from '@/components/TablaMensajes.vue'

export default {
  components: {
    Mensajes
  }
}
</script>
