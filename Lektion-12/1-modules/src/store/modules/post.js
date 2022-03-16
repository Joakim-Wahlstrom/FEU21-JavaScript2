import axios from 'axios'

export default {
  state: {
    post: null
  },
  getters: {
    post: state => state.post
  },
  mutations: {
    SET_POST: (state, post) => {
      state.post = post
    }
  },
  actions: {
    getPost: async ({commit}, id) => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      commit('SET_POST', res.data)
    }
  }
}