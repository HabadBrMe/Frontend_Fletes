<template>
  <div class="vehiculos row justify-content-md-center">
    <div class="card col-9">
      <div class="card-header">
        <h1>Agregar registro de carga de combustible para el "bocho"</h1>
      </div> 
      <div class="card-body">
          <form action="/tablerotranspor/MensajesRecibidos">
            <div clas="form-group">
                <div class="row">
                <div class="col">
                  <label for="fecha">Fecha</label>
                  <input type="date" class="form-control" id="placa" name="placa" placeholder="Ingrese el numero de placa" required>
                </div>
                <div class="col">
                  <label for="hora">Hora</label>
                  <input type="time" class="form-control" id="placa" name="placa" placeholder="Ingrese el numero de placa" required>
                </div>
                </div>
            </div>
            <div clas="form-group">
              <div class="row">
                  <div class="col">
                    <label for="placa">Litros</label>
                    <input type="number" class="form-control" id="placa" name="placa" placeholder="Ingrese el numero de placa" min="1" required>
                  </div>
                  <div class="col">  
                    <label for="placa">Odómetro de carga</label>
                    <input type="number" class="form-control" id="placa" name="placa" placeholder="Ingrese el numero de placa" min="1" required>
                  </div>
              </div>
                  <label for="statustanque">Tanque lleno</label>
                  <select class="form-control" id="statustanque" name="statustanque" required>
                      <option value="">Seleccione una opción</option>
                      <option value="si">Si</option>
                      <option value="no">No</option>
                  </select><br>
            </div>
            <div>
                <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>