import axios from "axios";

const api = "https://mobi-fletes-staging.herokuapp.com";

export default {
  login(email, password){
    return axios.post(api + "/api/login/access", {email, password})
     .then(function (response) {      
        localStorage.Uinfo = JSON.stringify(response.data.data.user);
        localStorage.Utoken = response.data.data.access_token;
        console.log("Exios")
        console.log(localStorage.Uinfo);
        console.log(localStorage.Utoken);
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
          console.log(response);
        }
      })
  }
};

