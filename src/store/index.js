import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import player from './modules/player'
import tagsView from './modules/tagsView'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    player,
    tagsView
  },
  getters
})

export default store
