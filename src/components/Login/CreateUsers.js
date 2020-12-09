import axios from 'axios'
import router from '@/router/index.js'

const api = "https://mobi-fletes-staging.herokuapp.com";

export default {
    UTransportista(data){
        console.log(data);
        axios.post(api + "/api/admin/users/createCarrier", data)
         .then(function (response) {
            console.log(response)
            router.push("/login");
        })
        .catch(error => {
            console.log(error);
            //alert(error.response.data.errors)
        })
     },
     UClientePersonal(data){
        console.log(data);
        axios.post(api + "/api/admin/users/createClienteP", {data})
         .then(function (response) {
            console.log(response)
            router.push("/login");
        })
        .catch(error => {
            console.log(error);
            //alert(error.response.data.errors)
        })
     },
     UClienteempresa(data){
        console.log(data);
        /*
        axios.post(api + "/api/admin/users/createClienteE", data)
         .then(function (response) {
            console.log(response)
            router.push("/login");
        })
        .catch(error => {
            console.log(error);
            //alert(error.response.data.errors)
        })
        */
     },
     UMonitorista(data){
        console.log(data);
        /*
        axios.post(api + "/api/admin/users/createMonitorist", data)
         .then(function (response) {
            console.log(response)
            router.push("/login");
        })
        .catch(error => {
            console.log(error);
            //alert(error.response.data.errors)
        })
        */
     }
};