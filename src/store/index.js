import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      autenticado: "",
    }
  },
  mutations: {
      saveUser(state){ //, email, token){
        if(localStorage.Uinfo && localStorage.Utoken && state.autenticado == ""){
          state.autenticado = localStorage.Urole;
        }
      },
      clearUser(state){
        state.autenticado = "";
      }
  }
});

export default store
