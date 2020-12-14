<template>
<div class="Mensajes">
    <div class="card">
        <div class="card-header">
            <h1>Todos los Mensajes {{titulo}}</h1>
        </div>
        <div class="card-body">
                <table class="table table-hover table-bordered table-dark table-striped table-resposive">
                <thead>
                    <tr>
                    <td>{{tipo}}</td>
                    <td>Asunto</td>
                    <td>Mensaje</td>
                    <td>fecha</td>
                    </tr>
                </thead>
                    <tr>
                    <td>cr7@hot</td>
                    <td>Champions League</td>
                    <td>Cargar el equipo para el partido del proximo Martes</td>
                    <td>02/02/2021</td>        
                    </tr>
                </table>		
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Mensajes',
  props: {
    titulo: String,
    tipo: String
  }
}
</script>