<template>
<div class="choferes row justify-content-md-center">
  <div class="card col-9">
    <div class="card-body">
        <form>
              <div class="form-group">
                  <div class="row">
                    <div class="col">
                      <label for="chofer">Chofer</label>
                      <input type="text" class="form-control" id="chofer" name="chofer" placeholder="Ingrese el chofer" required><br>
                      </div>
                    <div class="col">
                      <label for="dni">DNI</label>
                      <input type="text" class="form-control" id="dni" name="dni" placeholder="Ingresa su DNI" required><br>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <label for="licencia">Licencia de Conducir</label>
                      <input type="text" class="form-control" id="licencia" name="licencia" placeholder="Ingrese la Licencia" required><br>
                      </div>
                    <div class="col">
                      <label for="user">Usuario</label>
                      <input type="text" class="form-control" id="user" name="user" placeholder="Ingresa el usuario" required><br>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <label for="tel">Telefono</label>
                      <input type="text" class="form-control" id="tel" name="tel" placeholder="Ingrese el numero de telefono" minlength="10" required pattern="[0-9]+"><br>
                      </div>
                    <div class="col">
                      <label for="documento">Documento</label>
                      <input type="text" class="form-control" id="documento" name="documento" placeholder="Nose que procede" required><br>
                    </div>
                  </div>
                <div>
                    <button type="submit" class="btn btn-primary">Agregar</button>
                    <button type="submit" class="btn btn-primary">Buscar</button>
                    <button type="submit" class="btn btn-primary">Editar</button>
                    <button type="submit" class="btn btn-primary">Eliminar</button>
                </div>
              </div>
        </form>
    </div>
  </div>
</div>
</template>