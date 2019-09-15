import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    note: ''
  },
  getters: {
    getNote(state){
      return state.note;
    }
  },
  mutations: {
    setNote(state, data){
      state.note = data;
    }
  },
  actions: {
    setNote({commit}, data){
      commit('setNote', data);
    }
  }
})
