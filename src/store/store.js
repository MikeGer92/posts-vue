import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: [],
    errors: []
  },
  actions: {
    async GET_USERS({commit}) {
      await axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(res => { 
          console.log(res)
          commit('SET_USERS', res.data);

        })
        .catch(err => { 
          if (err.response) { 
            console.log(err.message)
            alert('Ошибка запроса. Проверьте данные запроса!')
            
          } else if (err.request) { 
            console.log(err)
          } else { 
            console.log(err)
          }
          commit('SET_ERRORS', err) 
        }
      )
    }
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users;
    },
    SET_ERRORS: (state, errors) => {
      state.errors = errors;
    }
  },
  getters: {
    USERS(state) {
      return state.users;
    },
    ERRORS(state) {
      return state.errors;
    }
  }
});

export default store;