/**
 * Created by yihuo.lj on 2016/5/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {}
}

const mutations = { ... }

export default new Vuex.Store({
  state,
  mutations
})
