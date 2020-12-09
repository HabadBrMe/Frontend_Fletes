import axios from 'axios'
import router from '@/router/index.js'

const api = "https://mobi-fletes-staging.herokuapp.com";

export default {
    UTransportista(
        comercial_name, 
        rfc,
        first_name,
        second_name,
        first_last_name,
        second_last_name,
        ine,
        email,
        password,
        phone,
        places,
        cp,
        departament,
        services
    ){
        axios.post(api + "/api/admin/users/createCarrier", {   
            comercial_name, 
            rfc,
            first_name,
            second_name,
            first_last_name,
            second_last_name,
            ine,
            email,
            password,
            phone,
            places,
            cp,
            departament,
            services
        })
         .then(function (response) {
            console.log(response)
            router.push("/login");
        })
        .catch(error => {
            console.log(error);
            alert(error.response.data.errors)
        })
     },
     UClientePersonal(
        first_name,
        second_name,
        first_last_name,
        second_last_name,
        ine,
        email,
        password,
        facebook,
        webside,
        places,
        address,
        phone,
        cp,
        time_zone
    ){
        axios.post(api + "/api/admin/users/createClienteP", {
            first_name,
            second_name,
            first_last_name,
            second_last_name,
            ine,
            email,
            password,
            facebook,
            webside,
            places,
            address,
            phone,
            cp,
            time_zone
        })
         .then(function (response) {
            console.log(response)
            router.push("/login");
        })
        .catch(error => {
            console.log(error);
            alert(error.response.data.errors)
        })
     },
     UClienteempresa(
        comercial_name,
        rfc,
        first_name,
        second_name, 
        first_last_name,
        second_last_name,
        email,
        password,
        facebook,
        webside,
        places,
        address,
        phone,
        cp,
        time_zone,
     ){
        axios.post(api + "/api/admin/users/createClienteE", {
            comercial_name,
            rfc,
            first_name,
            second_name, 
            first_last_name,
            second_last_name,
            email,
            password,
            facebook,
            webside,
            places,
            address,
            phone,
            cp,
            time_zone,
        })
         .then(function (response) {
            console.log(response)
            router.push("/login");
        })
        .catch(error => {
            console.log(error);
            alert(error.response.data.errors)
        })
     },
     UMonitorista(
        comercial_name,
        rfc,
        first_name,
        second_name,
        first_last_name,
        second_last_name,
        ine,
        email,
        password,
        phone,
        places,
        cp
     ){
        axios.post(api + "/api/admin/users/createMonitorist", {
            comercial_name,
            rfc,
            first_name,
            second_name,
            first_last_name,
            second_last_name,
            ine,
            email,
            password,
            phone,
            places,
            cp
        })
         .then(function (response) {
            console.log(response)
            router.push("/login");
        })
        .catch(error => {
            console.log(error);
            alert(error.response.data.errors)
        })
     }
};