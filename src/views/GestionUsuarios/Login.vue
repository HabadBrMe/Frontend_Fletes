<template>
  <div class="login">
    <div class="contacto row justify-content-md-center" >
      <div class="card">
        <div class="card-body">
        <form @submit.prevent="login">
          <div class="text-center mb-4">
            <img src="@/assets/logo.webp" class="img-fluid" alt="">
            <h2>Iniciar Seción</h2>
          </div>

          <div class="form-group">
            <label for="inputEmail">Correo Electronico</label>
            <input v-model="lemail" type="email" id="inputEmail" class="form-control" autofocus="" required>
          </div>

          <div class="form-group">
            <label for="inputPassword">Contraseña</label>
            <input v-model="lpassword" type="password" id="inputPassword" class="form-control" required>
          </div>

          <div class="mb-2">
            <label>
              <router-link  to="#">¿Olvido su contraseña?</router-link>
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
          <p class="mt-3 text-muted text-center">¿No tienes una cuenta? <router-link  to="/register">Crea una cuenta</router-link></p>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import auth from "@/components/Login/auth.js";
export default {
  data: () => ({
    lemail: "",
    lpassword: "",
  }),
  methods: {
    async login() {
      await auth.login(this.lemail, this.lpassword);
    }
  }
};
</script>
<style scoped>
</style>