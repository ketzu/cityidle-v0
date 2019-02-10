import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const resourcegain = (state) => {
  // base generation
  let gain = 1;

  return gain;
};

export default new Vuex.Store({
  state: {
    resource: 0,
    tickrate: 100,
    towntype: "Village",
    title: "Mayor",
    currency: "€"
  },
  getters: {
    resource(state) { return state.resource; },
    tickrate(state) { return state.tickrate; },
    towntype(state) { return state.towntype; },
    currency(state) { return state.currency; },
    title(state) { return state.title; },
    resourcegain(state) {
      return resourcegain(state);
    }
  },
  mutations: {
    initstore(state) {
      // Check if the ID exists
      if (localStorage.getItem('igame-v1')) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('igame-v1')))
        );
      }
    },
    startgame(state) {
      setInterval(() => {
        state.resource += resourcegain(state);
      }, state.tickrate);
    },
    updateresource(state, payload) {
      state.resource = payload.value;
    },
    spendresource(state, payload) {
      state.resource -= payload.value;
    },
    settownspecs(state, {title, towntype}) {
      state.towntype = towntype;
      state.title = title;
    }
  },
  actions: {
    updateresource({commit}, payload) {
      commit('updateresource', payload);
    },
    spendresource({commit}, payload) {
      commit('spendresource', payload);
    },
    settownspecs({commit}, payload) {
      commit('settownspecs', payload);
    }
  }
})
