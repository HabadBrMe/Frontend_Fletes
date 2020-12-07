<template>
  <div class="MisEnvios" id="accordion">
    <h1>This is an Envios page</h1>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#articulo" role="button" aria-expanded="false" aria-controls="collapseExample">
          Articulo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#cargaen" role="button" aria-expanded="false" aria-controls="collapseExample">
          Cargen en ...</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#entregaen" role="button" aria-expanded="false" aria-controls="collapseExample">
          Entrega en ...</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#entregaen" role="button" aria-expanded="false" aria-controls="collapseExample">
          Servicio Adicionales</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#entregaen" role="button" aria-expanded="false" aria-controls="collapseExample">
          Publicar Envio</a>
      </li>
  </ul>
  <div class="collapse" id="articulo" data-parent="#accordion">
    <div class="card card-body">
      Eliga su Vehiculo
      <select name="tipo_vehiculo">
          <option value="0">Seleccione</option>
          <option value="Camioneta">Camioneta</option>
          <option value="Full (doble caja)">Full (doble caja)</option>
          <option value="Thorton">Thorton</option>
          <option value="Trailer de 48">Trailer de 48</option>
          <option value="Trailer 53">Trailer 53´´</option>
      </select> 
      Dimensiones unitarias
      <label for="largo">Largo</label>
      <input type="text" placeholder="ingrese en Metros" name="largo" id="largo">
      <label for="largo">Alto</label>
      <input type="text" placeholder="ingrese en Metros" name="alto" id="alto">
      <label for="largo">Ancho</label>
      <input type="text" placeholder="ingrese en Metros" name="ancho" id="ancho">
      <label for="largo">Peso</label>
      <input type="text" placeholder="ingrese en Kg" name="peso" id="peso"> 
      <div clas="form-group row">
      <label for="num_total_articulos">Numero total de articulos</label>
      <input type="text" placeholder="ingrese el total de articulos" name="num_total_articulos" id="num_total_articulos" class="form-control" pattern="{0-9}" required><br>
      <label for="peso_total">Peso Total </label>
      <input type="text" placeholder="ingrese en Kg" name="peso_total" id="peso_total" class="form-control" min="1" required><br>
      <label for="num_unidades">Numero de Unidades</label>
      <input type="text" placeholder="ingrese el numero de Unidades" name="num_unidades" id="num_unidades" class="form-control" min="1" required><br>
  
      <label for="empaquetado">Empaquetado</label>
      <select name="empaquetado" id="empaquetado" class="form-control" required>
          <option value="">Seleccione</option>
          <option value="Agrupados">Agrupados</option>
          <option value="Alfombras">Alfombras</option>
          <option value="Bobinas">Bobinas</option>
          <option value="Bolsas">Bolsas</option>
          <option value="Bombona">Bombona</option>
          <option value="Cajas">Cajas</option>
          <option value="Cajas de Madera">Cajas de Madera</option>
          <option value="Cajones">Cajones</option>
          <option value="Carrete">Carrete</option>
          <option value="Carton">Carton</option>
          <option value="Cilindros">Cilindros</option>
          <option value="Contenedores">Contenedores</option>
          <option value="Cubos">Cubos</option>
          <option value="Encapsulados">Encapsulados</option>
          <option value="Fardos">Fardos</option>
          <option value="Latas">Latas</option>
          <option value="Otros">Otros</option>
          <option value="Palets (standar)">Palets (standar)</option>
          <option value="Rollos">Rollos</option>
          <option value="Suelto">Suelto</option>
          <option value="Tubos/Pipas">Tubos/Pipas</option>
      </select><br>
          <label for="peso_total_articulo">Peso Total del Articulo</label>
          <input type="text" placeholder="ingrese en Kg" name="peso_total_articulo" id="peso_total_articulo" class="form-control" min="1" required><br>
      
      </div>
      <legend>Detalles</legend> <br>

            <legend>Apilable</legend>
             <select name="apilable"> 
                <option value="0">Seleccione</option>
                <option value="SI">SI</option>
                <option value="NO">NO</option>
            </select>  

            <legend>MaterialPeligroso</legend>
             <select name="mat_peligroso"> 
                <option value="0">Seleccione</option>
                <option value="SI">SI</option>
                <option value="NO">NO</option>
            </select>  


            <legend>Perecedero</legend>
             <select name="perecedero"> 
                <option value="0">Seleccione</option>
                <option value="SI">SI</option>
                <option value="NO">NO</option>
            </select> 
    </div>
  </div>
  <div class="collapse" id="cargaen" data-parent="#accordion">
    <div class="card card-body">
      Origen Carga <input type="text" placeholder="ingrese el origen de la carga" name="origen"> 
      Cargar el <input type="text" placeholder="AAAA-MM-DD" name="fecha_carga"> 
      Lugar <input type="text" placeholder="ingrese lugar (empresa,...) " name="lugar_carga"> 

    <legend>Cargar en Interior</legend>
      <select name="carga_interior"> 
        <option value="0">Seleccione</option>
        <option value="SI">SI</option>
        <option value="NO">NO</option>
    </select>  

    <legend>Requiere Elevador</legend>
      <select name="requiere_elevador_carga"> 
        <option value="0">Seleccione</option>
        <option value="1">SI</option>
        <option value="0">NO</option>
    </select>  
    </div>
  </div>
  <div class="collapse" id="entregaen" data-parent="#accordion">
    <div class="card card-body">
      <legend><h2>Informacion de Entrega</h2></legend>  
        Destino de la carga <input type="text" placeholder="ingrese el origen de la carga" name="destino"> 
        Entregar el <input type="text" placeholder="AAAA-MM-DD" name="fecha_entrega"> 
        Lugar <input type="text" placeholder="ingrese lugar (empresa,...) " name="lugar_entrega"> 

      <legend>Entregar en Interior</legend>
        <select name="entrega_interior"> 
          <option value="0">Seleccione</option>
          <option value="SI">SI</option>
          <option value="NO">NO</option>
      </select>  

      <legend>Requiere Elevador</legend>
        <select name="requiere_elevador_entrega"> 
          <option value="0">Seleccione</option>
          <option value="SI">SI</option>
          <option value="NO">NO</option>
      </select>  
    </div>
  </div>
  <div class="collapse" id="serviciosadicionesles" data-parent="#accordion">
    <div class="card card-body">
      hola si
    </div>
  </div>
  <div class="collapse" id="publicarenvio" data-parent="#accordion">
    <div class="card card-body">
      <legend><h2>Informacion del Anuncio</h2></legend>        
           Fecha de Publicacion <input type="text" placeholder="AAAA-MM-DD" name="inicio_publicacion">
           Fecha de Expiracion <input type="text" placeholder="AAAA-MM-DD" name="fin_publicacion">
        Tipo del Precio
            <select name="tipo_precio">
           <option value="0">Seleccione</option> 
           <option value="Fijo">Fijo</option> 
           <option value="Libre">Libre</option> 
           <option value="Mixto">Mixto</option> 
           </select>         
           Precio <input type="text" placeholder="ingrese el precio" name="precio">
           Distancia aproximada <input type="text" placeholder="ingrese Kilomtros aproximados" name="dis_km_aprox">
           Tiempo aproximado <input type="text" placeholder="ingrese tiempo aproximados" name="tiempo_aprox">
           Tipo de Servicio
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
        <legend><h2>informacion de Pago</h2></legend>  
            
            <legend>Metodo de Pago</legend>
             <select name="metodo_pago"> 
                <option value="0">Seleccione</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Deposito o Transferencia">Deposito o Transferencia</option>
                <option value="Cheque">Cheque</option>
                <option value="Tarjeta de Credito">Tarjeta de Credito</option>
            </select>
    </div>
  </div>
  </div>
  
</template>