<template>
    <div class="logout">
        <button class="" v-on:click="salir">logout</button>
    </div>
</template>

<script>
import auth from "@/components/Login/auth.js";
export default {
    name: 'Blogout',
    methods: {
        async salir() {
        try{
            await auth.logout(localStorage.Utoken)
            this.$router.push("/");
        }catch (error) {
            console.log(error);
        }
        }
    }
}
</script>