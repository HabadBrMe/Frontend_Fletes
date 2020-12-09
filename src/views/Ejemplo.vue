<template>
  <Sidebar />
  <h1>Hola, Bienvenido</h1>
  <p>Nombre usuario: {{info.name}}, y correo electronico: {{info.email}}</p>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
export default {
  name: 'Ejem',
  components: {
    Sidebar
  },
  data: () => ({
    info: JSON.parse(localStorage.Uinfo),
    token: localStorage.Utoken
  })
}
</script>