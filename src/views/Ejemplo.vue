<template>
  <Sidebar />
  <h1>This is a page Usuaruio</h1>
  <p>{{info}}, {{token}}</p>
  <div id="exit">
      <button  v-on:click="Salir()" >Logout</button>  
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import auth from "@/components/Login/auth.js";
export default {
  name: 'sid',
  components: {
    Sidebar
  },
  data: () => ({
    info: localStorage.Uinfo,
    token: localStorage.Utoken
  }),
  methods: {
    async Salir() {
      try{
        await auth.logout(this.token)
        this.$router.push("/");
      }catch (error) {
        console.log(error);
      }
    }
  }
}
</script>