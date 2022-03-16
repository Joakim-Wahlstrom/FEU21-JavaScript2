import { v4 as uuidv4 } from 'uuid' 

export default {
  state: {
    users: [
      { id: '124nk2j3534jb', name: 'User 1', active: true },
      { id: '124asfgdfs4jb', name: 'User 2', active: false },
      { id: '124nk2dfhfghs', name: 'User 3', active: true },
    ]
  },
  getters: {
    users: state => state.users
  },
  mutations: {
    ADD_USER: (state, user) => {
      state.users.push(user)
    },
    REMOVE_USER: (state, id) => {
      state.users = state.users.filter(user => user.id !== id)
    },
    TOGGLE_ACTIVE_STATE: (state, user) => {
      user.active = !user.active
    }
  },
  actions: {
    addUser: ({commit}, userName) => {
      const user = {
        id: uuidv4(),
        name: userName,
        active: true
      }
      commit('ADD_USER', user)
    },
    removeUser: ({commit}, id) => {
      commit('REMOVE_USER', id)
    },
    toggleActive: ({commit}, user) => {
      commit('TOGGLE_ACTIVE_STATE', user)
    }
  }
}