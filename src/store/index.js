import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSideBar: false
  },
  mutations: {
    toggleSideBar (state) {
      state.showSideBar = !state.showSideBar
    }
  }
})
