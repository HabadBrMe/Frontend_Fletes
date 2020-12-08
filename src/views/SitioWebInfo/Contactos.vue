<template>
  <div class="contacto row justify-content-md-center" >
  <div class="card col-9">
    <div class="card-header">
      <h1>Contáctanos</h1>
      <p>Estamos atentos a tu consulta o duda</p>
    </div>
    <div class="card-body">
        <form action="#">
              <div clas="form-group">
                  <div class="row">
                    <div class="col">
                      <label for="nombre">Nombre(s)</label>
                      <input type="text" class="form-control" id="nombre" name="nombre" required><br>
                    </div>
                    <div class="col">
                      <label for="apellido">Apellido(s)</label>
                      <input type="text" class="form-control" id="apellido" name="apellido" required><br>
                    </div>
                  </div>
                <div class="row">
                    <div class="col">
                      <label for="placa">Email</label>
                      <input type="text" class="form-control" id="placa" name="placa" required><br>
                    </div>
                    <div class="col">
                      <label for="tel">Telefono</label>
                      <input type="text" class="form-control" id="tel" name="tel" required><br>
                    </div>
                  </div>
                <div class="col">
                  <label for="texto">Mensaje</label>
                  <textarea class="form-control" id="texto" name="texto" rows="3" style="resize:none;" maxlength="200" placeholder="Ingrese un mensaje meximo de 200 caracteres" required></textarea>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
          </div>
        </form>
    </div>
  </div>
</div>
</template>