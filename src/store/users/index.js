import axios from 'axios'
import { URL } from '../../helpers/env'

const state = () => {
  return {
    dataUser: []
  }
}

const getters = {
  getUser (state) {
    return state.dataUser
  }
}

const mutations = {
  SET_DATA_USER (state, payload) {
    state.dataUser = payload
  }
}

const actions = {
  getDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}/users/detail/${localStorage.getItem('id')}`).then((response) => {
        context.commit('SET_DATA_USER', response.data.data)
        resolve(response.data.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  update (context, payload) {
    return new Promise((resolve, reject) => {
      axios.patch(`${URL}/users/update/${payload.id}`, payload.data).then((response) => {
        resolve(response.data.message)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
