import { createStore } from 'vuex'
import blog from './modules/blog'
import post from './modules/post'
import users from './modules/users'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    blog,
    post,
    users,
  }
})
