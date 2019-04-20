const state = {
  is_admin : false
}

const getters = {
  is_admin : state =>  state.is_admin,
}

const mutations = {
  admin : (state,payload) => {
    state.is_admin = payload
  },
}

const actions = {
  
}

export default {
  state,
  getters,
  mutations,
  actions
}
  