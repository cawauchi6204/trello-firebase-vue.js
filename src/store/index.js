import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists:[],
  },
  mutations: {
    addList(commit,payload) {
      this.state.lists.push({title:payload.title,cards:[]})
    }
  },
  actions: {
    addList(context, payload) {
      context.commit('addlist', payload)
    }
  },
  getters: {},
});
