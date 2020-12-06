import axios from 'axios'
import store from '@/store/index.js'

const api = "https://mobi-fletes-staging.herokuapp.com";

export default {
  login(email, password){
    return axios.post(api + "/api/login/access", {email, password})
     .then(function (response) {      
        localStorage.Uinfo = JSON.stringify(response.data.data.user);
        localStorage.Utoken = response.data.data.access_token;
        store.commit('saveUser', response.data.data.access_token);
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

