import axios from 'axios'
import router from '@/router/index.js'
import store from '@/store/index.js'

const api = "https://mobi-fletes-staging.herokuapp.com";

export default {
  login(email, password){
    console.log(email);
    console.log(password);
    axios.post(api + "/api/login/access", {email, password})
     .then(function (response) {      
        localStorage.Uinfo = JSON.stringify(response.data.data.user);
        localStorage.Utoken = response.data.data.access_token;
        store.commit('saveUser', response.data.data.access_token);
        router.push("/ejemplo");
      })
      .catch(error => {
        alert(error.response.data.errors)
        return (error.response.data.errors);
      })
 },
  logout(Atoken){
    var config = {
      method: 'post',
      url: api+'/api/login/logout',
      headers: { 
        'Authorization': 'Bearer '+Atoken
      }
    };
    axios(config)
      .then(function (response) {
        if(response){
          localStorage.clear();
          console.log(response.data.message);
        }
      })
  }
};

