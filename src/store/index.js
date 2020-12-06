import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      prueba: 0
    }
  },
  mutations: {
      saveUser(state, name){ //, email, token){
          state.prueba = name;
          //state.Uemail = email;
          //state.Utoken = token;
      },
      cambiarprueba(state){
        state.prueba = "noe";
      }
  }
});

export default store;
