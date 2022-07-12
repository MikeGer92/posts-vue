import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: []
  },
  actions: {
    async GET_USERS({commit}) {
      const response = await axios('https://jsonplaceholder.typicode.com/users/',
        {
          method: 'GET'
        });
      commit('SET_USERS', response.data);
    }
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users;
    }
  },
  getters: {
    USERS(state) {
      return state.users;
    }
  }
});

export default store;