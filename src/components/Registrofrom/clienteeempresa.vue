<template>
    <div class="card-body">
        <form @submit.prevent="crearClienteEmpresa">
          <div class="row justify-content-md-center">
          <div class="form-group col-4">
            <label for="exampleInputEmail1">Nombre comercial</label>
            <input v-model="comercial_name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

            <label for="exampleInputEmail1">Primer Nombre del contacto</label>
            <input v-model="first_name"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          
            <label for="exampleInputEmail1">Primer Apellido del contacto</label>
            <input v-model="first_last_name"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

            <label for="exampleInputEmail1">Segundo Nombre del contacto</label>
            <input v-model="second_name"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            
            <label for="exampleInputEmail1">Segundo Apellido del contacto</label>
            <input v-model="second_last_name"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group col-4">
            <label for="exampleInputEmail1">Telefono</label>
            <input v-model="phone"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
         
            <label for="exampleInputEmail1">Website</label>
            <input v-model="webside"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

            <label for="exampleInputEmail1">Facebook</label>
            <input v-model="facebook"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">          

            <label for="exampleInputEmail1">RFC</label>
            <input v-model="rfc"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group col-4">
            <label for="exampleInputEmail1">Dirección</label>
            <input v-model="address"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

            <label for="exampleInputEmail1">Ciudad</label>
            <input v-model="places"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

            <label for="exampleInputEmail1">C.P.</label>
            <input v-model="cp"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

            <label for="exampleFormControlSelect1">Zona Horaria</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>

          </div>
          </div>
          <div class="row justify-content-md-center">
          <div class="form-group col-4">
            <label for="exampleInputEmail1">Email</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group col-4">
            <label for="exampleInputPassword1">Contraseña</label>
            <input v-model="password" type="password" class="form-control" id="password1" >
          </div>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Aceptas y confirmas que leíste nuestros aviso de privacidad incluido los términos y condiciones del servicio</label>
          </div>
          <button type="submit" class="btn btn-primary">Continuar</button>
          <p class="mt-3 text-muted text-center">¿No tienes una cuenta? <router-link  to="/register">Crea una cuenta</router-link></p>
          </form>
      </div>
</template>

<script>
import User from "@/components/Login/CreateUsers.js";
export default {
    name: 'fromcenviaempresa',
  data: () => ({
    comercial_name:"",
    rfc:"",
    first_name:"",
    second_name: "", 
    first_last_name: "",
    second_last_name: "",
    email: "",
    password: "",
    facebook:"",
    webside:"",
    places: "",
    address: "",
    phone: "",
    cp: "",
    time_zone:""

  }),
  methods: {
    async crearClienteEmpresa() {
      await User.UClienteempresa(JSON.stringify(this.$data));
    }
  }
};
</script>