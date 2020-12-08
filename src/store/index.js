import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      prueba: ""
    }
  },
  mutations: {
      saveUser(state, name){ //, email, token){
          state.prueba = name;
          //state.Uemail = email;
          //state.Utoken = token;
      },
      cambiarprueba(state){
        state.prueba = "";
      }
  }
});

export default store;
