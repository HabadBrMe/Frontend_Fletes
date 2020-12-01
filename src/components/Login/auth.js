import axios from "axios";

const ENDPOINT_PATH = "https://mobi-fletes-staging.herokuapp.com";

export default {
  login(email, password){
    return axios.post(ENDPOINT_PATH + "/api/login/access", {email, password});
     /* .then(function (response) {      
          return response;
      })
      */
  },
  logout(Atoken){
    axios.post(ENDPOINT_PATH + "/api/login/logout", {Atoken})
      .then(function (response) {
        console.log(response);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};

