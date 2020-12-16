<template>
  <div class="vehiculos row justify-content-md-center">
    <div class="card col-9">
      <div class="card-body">
        <button type="button" class="btn btn-primary" onclick="location.href = '{{ route('AgregarVehiculos') }}'">Agregar un Vehículo</button><br><br>
        <table class="table table-hover table-bordered table-dark table-striped table-resposive">
          <thead >
            <tr>
              <td>Placa</td>
              <td>Tipo</td>
              <td>Descripción</td>
              <td>Documento</td>
            </tr>
            <tr>
            <td>45465454</td>
            <td>Bocho</td>
            <td>Modificado con nitro y carrroceria</td>
            <td>
              <a href="#">Editar</a>
              <a href="#">Eliminar</a>
              <a href="#">Desactivar/Activar</a>
              <a href="#">Combustible</a>
              <a href="#">Documentos</a>
            </td>        
            </tr>
          </thead>
        </table>
      </div>	
    </div>
  </div>
</template>
