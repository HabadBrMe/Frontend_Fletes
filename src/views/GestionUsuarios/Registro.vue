<template>
  <div class="register" id="register">
    <h1>This is an Envios page</h1>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#clienteenvia" role="button" aria-expanded="false" aria-controls="collapseExample">
          Cliente Envia</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#transportista" role="button" aria-expanded="false" aria-controls="collapseExample">
          Transportista</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#monitorista" role="button" aria-expanded="false" aria-controls="collapseExample">
          Monitorista</a>
      </li>
  </ul>
  <div class="collapse" id="clienteenvia" data-parent="#register">
    <div class="card card-body">
      <form>
        <div Class="">
        <div class="form-group ">
          <label for="exampleInputEmail1">Nombre comercial</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group ">
          <label for="exampleInputEmail1">Segundo Nombre del contacto</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group ">
          <label for="exampleInputEmail1">Dirección</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group ">
          <label for="exampleInputEmail1">CURP</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group ">
          <label for="exampleInputEmail1">Segundo Apellido del contacto</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">País</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">RFC</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">INE</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Estado</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Primer Nombre del contacto</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Ciudad</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Primer Apellido del contacto</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Telefono</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">C.P.</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Servicios</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Confirmar Contraseña</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Aceptas y confirmas que leíste nuestros aviso de privacidad incluido los términos y condiciones del servicio</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <p>¿Ya tienes una cuenta?<router-link class="nav-link" to="/login">Ingresa con tu cuenta</router-link></p>
        </div>
      </form>
    </div>
  </div>
   <div class="collapse" id="transportista" data-parent="#register">
    <div class="card card-body">
    </div>
  </div>
   <div class="collapse" id="monitorista" data-parent="#register">
    <div class="card card-body">
    </div>
  </div>
  </div>
  
</template>