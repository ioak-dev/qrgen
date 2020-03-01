import axios from 'axios';

const state = {
  qrcodes: [],
};

const getters = {
  getQrcodes: (state: any) => {
    return state.qrcodes;
  },
};

const actions = {
  async fetchQrcodes({ commit }: { commit: any }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    commit('setQrcodes', response.data);
  },
};

const mutations = {
  setQrcodes: (state: any, qrcodes: any) => {
    state.qrcodes = qrcodes;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
