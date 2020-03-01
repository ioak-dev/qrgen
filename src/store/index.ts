import Vue from 'vue';
import Vuex from 'vuex';
import qrcode from '../store/modules/qrcode';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    qrcode,
  },
});
