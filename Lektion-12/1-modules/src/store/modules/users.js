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
  },
  actions: {
  }
}