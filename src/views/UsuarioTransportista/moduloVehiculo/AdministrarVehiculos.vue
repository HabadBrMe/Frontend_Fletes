<template>
  <div class="vehiculos row justify-content-md-center">
    <div class="card col-9">
      <div class="card-body">
          <form action="">
                <div clas="form-group">
                    <div class="row">
                      <div class="col">
                        <label for="placa">Placa</label>
                        <input type="text" class="form-control" id="placa" name="placa" placeholder="Ingrese el numero de placa" required><br>
                      </div>
                      <div class="col">
                        <label for="tipo">Tipo</label>
                        <select class="form-control" id="tipo" name="tipo" required>
                          <option value="0">Seleccione</option>
                          <option value="Camioneta">Camioneta</option>
                          <option value="Full (doble caja)">Full (doble caja)</option>
                          <option value="Thorton">Thorton</option>
                          <option value="Trailer de 48">Trailer de 48</option>
                          <option value="Trailer 53">Trailer 53´´</option>
                      </select> 
                      </div>
                    </div>
                  <div class="row">
                    <div class="col">
                        <label for="marca">Marca</label>
                        <input type="text" class="form-control" id="marca" name="marca" placeholder="Ingrese la marca del vehiculo" required><br>
                        <label for="modelo">Modelo</label>
                        <input type="text" class="form-control" id="modelo" name=modelo placeholder="Ingrese el modelo del vehiculo" required><br>
                        <label for="codecolor texcolor">Color<spam> (puede seleccionar o escribir el color)</spam></label>
                        <input type="color" class="form-control"  name="codecolor" id="codecolor" placeholder="seleccione el color del vehiculo">
                        <input type="text" class="form-control" id="texcolor" name="texcolor" placeholder="Ingrese el color del vehiculo" required><br>
                      </div>
                    <div class="col">
                      <label for="descripcion">Descripción</label>
                      <textarea class="form-control" id="descripcion" name="descripcion" rows="4" style="resize:none;" maxlength="200" placeholder="Ingrese una descripción del vehiculo meximo de 200 caracteres" required></textarea>
                    </div>
                  </div>
                  <div>
                      <button type="submit" class="btn btn-primary">Funcion</button>
                  </div>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>