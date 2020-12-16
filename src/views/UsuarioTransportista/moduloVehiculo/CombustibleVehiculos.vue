<template>
  <div class="vehiculos row justify-content-md-center">
    <div class="card col-9">
      <div class="card-header">
        <h1>Historial de Cargas de Combustible de "Bocho"</h1>
      </div> 
      <button type="button" class="btn btn-primary" onclick="location.href = '{{ route('AgregarCombustible') }}'">Agregar</button><br><br>
      <div class="card-body">
        <table class="table table-hover table-bordered table-dark table-striped table-resposive">
          <thead >
            <tr>
              <td>Fecha</td>
              <td>Hora</td>
              <td>Litros</td>
              <td>Odómetro de carga</td>
              <td>Tanque lleno</td>
            </tr>
            <tr>
            <td>15/06/20</td>
            <td>15:46:12</td>
            <td>300</td>
            <td>124578</td>
            <td>No</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>