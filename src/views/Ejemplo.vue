<template>
  <Sidebar />
  <h1>This is a page Usuaruio</h1>
  <p>{{info}}, {{token}}</p>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import auth from '@/components/Login/auth.js'
export default {
  name: 'Ejem',
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
    },
    otro() {
      console.log(this.$store.state.prueba);
    }
  }
}
</script>