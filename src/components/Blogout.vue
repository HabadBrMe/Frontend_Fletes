<template>
    <div class="logout">
        <button type="button" class="btn btn-dark" v-on:click="salir">Salir</button>
    </div>
</template>

<script>
import auth from "@/components/Login/auth.js";
export default {
    name: 'Blogout',
    methods: {
        async salir() {
        try{
            await auth.logout(localStorage.Utoken);
            this.$store.commit('clearUser');
            this.$router.push("/");
        }catch (error) {
            console.log(error);
        }
        }
    }
}
</script>