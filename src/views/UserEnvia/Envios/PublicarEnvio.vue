<template>
  <div class="MisEnvios row justify-content-md-center" id="MisEnvios">
  <div class="col-9">
    <ul class="nav nav-tabs row justify-content-md-center m-1">
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#publicar" role="button" aria-expanded="false" aria-controls="publicar">
          Publicar Envio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#envios" role="button" aria-expanded="false" aria-controls="envios">
          Mis Envios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#gastos" role="button" aria-expanded="false" aria-controls="gastos">
          Gastos Adicionales</a>
      </li>
    </ul>
  <div class="card collapse show" id="publicar" data-parent="#MisEnvios">
    <form>
      
      <div class="card-header">
        <h5>Agregar Articulo</h5>
      </div>
      <div class="card-body row justify-content-md-center">
          <div class="form-group col">
            <label for="unidad_manejo">Unidad de Manejo</label>
            <select class="form-control" name="unidad_manejo" id="unidad_manejo" required>
              <option value="">Seleccione</option>
            </select>

            <label for="peso">Peso Unitario</label>
            <input type="text" class="form-control" placeholder="ingrese en Kg" name="peso" id="peso" required> 
          </div>
          <div class="form-group col">
            <label for="largo">Largo</label>
            <input type="text" class="form-control" placeholder="ingrese en Metros" name="largo" id="largo" required>

            <label for="num_total_articulos">No. Artículos</label>
            <input type="text" class="form-control" placeholder="ingrese el total de articulos" name="num_total_articulos" id="num_total_articulos" pattern="{0-9}" required>
          </div>
          <div class="form-group col">
            <label for="alto">Alto</label><br>
            <input type="text" class="form-control" placeholder="ingrese en Metros" name="alto" id="alto" required>

            <label for="peso_total">Peso Total </label>
            <input type="text" class="form-control" placeholder="ingrese en Kg" name="peso_total" id="peso_total" min="1" required>
          </div>
          <div class="form-group col">
            <label for="ancho">Ancho</label>
            <input type="text" class="form-control" placeholder="ingrese en Metros" name="ancho" id="ancho" required>
        
          </div> 

          <div class="col-12 align-self-start">
            <div class="row">
              <h5>Otros datos</h5>
            </div>  
            <div class="form-group row">  
              <div class="form-check m-1">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Apilable</label>
              </div>
              <div class="form-check m-1">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Peligroso</label>
              </div>
              <div class="form-check m-1">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Perecedero</label>
              </div>
            </div>
          </div>
      </div>
      <div class="card-header">
        <h5>Cargar en...</h5>
      </div>
      <div class="card card-body">
        <div class="form-group">
          <label for="empaquetado">País</label>
          <input type="text" placeholder="ingrese el origen de la carga" name="origen"> 
          
          <label for="empaquetado">Estado</label>
          <input type="text" placeholder="AAAA-MM-DD" name="fecha_carga"> 
        </div>
        <div class="form-group">
          <label for="empaquetado">Ciudad</label>
          <input type="text" placeholder="ingrese lugar (empresa,...) " name="lugar_carga"> 
          
          <label for="empaquetado">Calle o Lugar</label>
          <input type="text" placeholder="ingrese lugar (empresa,...) " name="lugar_carga"> 

          <label for="empaquetado">Lugar</label>
          <select name="carga_interior"> 
              <option value="">Seleccione</option>
          </select>
        </div>  
        <div class="form-group">
          <label for="empaquetado">Carga el ...</label>
          <input type="text" placeholder="ingrese lugar (empresa,...) " name="lugar_carga">   
          
          <label for="empaquetado">Cargas a las ...</label>
          <input type="text" placeholder="ingrese lugar (empresa,...) " name="lugar_carga"> 
        </div>
      </div>
      <div class="card-header">
        <h5>Entregar en...</h5>
      </div>
      <div class="card card-body">
        <div class="form-group">
          <label for="empaquetado">País</label>
          <input type="text" placeholder="ingrese el origen de la carga" name="origen"> 
          
          <label for="empaquetado">Estado</label>
          <input type="text" placeholder="AAAA-MM-DD" name="fecha_carga"> 
        </div>
        <div class="form-group">
          <label for="empaquetado">Ciudad</label>
          <input type="text" placeholder="ingrese lugar (empresa,...) " name="lugar_carga"> 
          
          <label for="empaquetado">Calle o Lugar</label>
          <input type="text" placeholder="ingrese lugar (empresa,...) " name="lugar_carga"> 

          <label for="empaquetado">Lugar</label>
          <select name="carga_interior"> 
            <option value="">Seleccione</option>
          </select>
        </div>
        <div class="form-group">
          <label for="empaquetado">Carga el ...</label> 
          <input type="text" placeholder="ingrese lugar (empresa,...) " name="lugar_carga">   
          
          <label for="empaquetado">Cargas a las ...</label>
          <input type="text" placeholder="ingrese lugar (empresa,...) " name="lugar_carga"> 
        </div>
      </div>
      <div class="card-header">
        <h5>Publicar Envio</h5>
      </div>
      <div class="card card-body">
        <div class="form-group">
          <label for="tipo_vehiculo">Tipo del Precio</label>      
          <select name="tipo_precio">
            <option value="0">Seleccione</option> 
            <option value="Fijo">Fijo</option> 
            <option value="Libre">Libre</option> 
            <option value="Mixto">Mixto</option> 
          </select> 
          
          <label for="tipo_vehiculo">Fecha de Expiracion</label>
          <input type="text" placeholder="AAAA-MM-DD" name="fin_publicacion">
                
          <label for="tipo_vehiculo">Tipo de Servicio</label>
          <select name="servicio">
              <option value="0">Seleccione</option>
              <option value="Alimentos y Bebidas">Alimentos y Bebidas</option>
              <option value="Carga General Seca">Carga General Seca</option>
              <option value="Carga Liquida">Carga Liquida</option>
              <option value="Carga Peligrosa IMO">Carga Peligrosa IMO</option>
              <option value="Carga Refrigerada">Carga Refrigerada</option>
              <option value="Insumos">Insumos</option>
              <option value="Material Peligroso">Material Peligroso</option>
          </select>   
        </div>
        <div class="form-group">
          <label for="tipo_vehiculo">Metodo de Pago</label>
          <select name="metodo_pago"> 
              <option value="">Seleccione</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Deposito o Transferencia">Deposito o Transferencia</option>
              <option value="Cheque">Cheque</option>
              <option value="Tarjeta de Credito">Tarjeta de Credito</option>
          </select>

          <label for="tipo_vehiculo">Unidad de Manejo</label>
          <select name="tipo_vehiculo" id="tipo_vehiculo">
            <option value="0">Seleccione</option>
            <option value="Camioneta">Camioneta</option>
            <option value="Full (doble caja)">Full (doble caja)</option>
            <option value="Thorton">Thorton</option>
            <option value="Trailer de 48">Trailer de 48</option>
            <option value="Trailer 53">Trailer 53´´</option>
          </select> 
        </div>
      </div>
      <button type="submit" class="btn btn-danger">Cancelar</button>
      <button type="submit" class="btn btn-success">Públicar</button>
    </form> 
  </div>
  <div class="collapse" id="envios" data-parent="#MisEnvios">
    <div class="card card-body">
        <div class="card-header">
        <h5>Mis Envios</h5>
      </div>
      <div class="card-body row justify-content-md-center">
          <div class="form-group col">

            <label for="peso">Titulo, Ubicacion o Referencia</label>
            <input type="text" class="form-control" name="referencia" id="referencia" required> 
          
          </div>
          <div class="form-group col">
            <label for="date">Fecha de publicacion<p></p></label>
            <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2010-01-01" max="2020-12-31">

          </div>

          <div class="form-group col">

          <label for="tipo_vehiculo">Tipo de Vehiculo<p></p></label>
          <select name="tipo_vehiculo" id="tipo_vehiculo">
            <option value="0">Seleccione</option>
            <option value="Camioneta">Camioneta</option>
            <option value="Full (doble caja)">Full (doble caja)</option>
            <option value="Thorton">Thorton</option>
            <option value="Trailer de 48">Trailer de 48</option>
            <option value="Trailer 53">Trailer 53´´</option>
          </select> 

          </div>

          <div class="form-group col">
            <div class="row">
              <h5>Estado del Envio<p></p></h5>
            </div>  
            <div class="form-group row">  
              <div class="form-check m-1">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Activo</label>
              </div>
              <div class="form-check m-1">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Eliminado</label>
              </div>
            </div>
          </div> 

          <div class="col-12 align-self-start">
            <div class="row">
              <h5>Tipo de servicio</h5>
            </div>  
            <div class="form-group row"> 

            <select name="servicio">
              <option value="0">Seleccione</option>
              <option value="Alimentos y Bebidas">Alimentos y Bebidas</option>
              <option value="Carga General Seca">Carga General Seca</option>
              <option value="Carga Liquida">Carga Liquida</option>
              <option value="Carga Peligrosa IMO">Carga Peligrosa IMO</option>
              <option value="Carga Refrigerada">Carga Refrigerada</option>
              <option value="Insumos">Insumos</option>
              <option value="Material Peligroso">Material Peligroso</option>
          </select>    

            </div>
          </div>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Titulo</th>
      <th scope="col">Carga-Entregar</th>
      <th scope="col">Estado</th>
      <th scope="col">----</th>
    </tr>
  </thead>
  <tbody>

  </tbody>
</table>

      </div>
    </div>
  </div>
  <div class="collapse" id="gastos" data-parent="#MisEnvios">
    <div class="card card-body">
      hola
    </div>
  </div>
</div>
</div>
</template>