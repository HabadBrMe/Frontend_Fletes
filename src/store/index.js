import { createStore } from 'vuex'
// Create a new store instance.
const store = createStore({
  state: {
    Uname: "",
    Uemail: "",
    Utoken: "",
    prueba: ""
  },
  mutations: {
      saveUser(state, name, email, token){
          state.Uname = name;
          state.Uemail = email;
          state.Utoken = token;
      },
      prueba(state, noe){
        state.prueba = noe;
      }
  }
});

export default store;
