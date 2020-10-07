import axios from 'axios'
import { URL } from '../../helpers/env'

const state = () => {
  return {
    token: localStorage.getItem('token') || null
  }
}

const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/users/login`, payload).then((response) => {
        // console.log(response.data.data)
        localStorage.setItem('token', response.data.data.token)
        localStorage.setItem('email', response.data.data.email)
        resolve(response.data.message)
      }).catch(() => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Email or Password wrong')
      })
    })
  },
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/users/register`, payload).then((response) => {
        resolve(response.data.message)
      }).catch(() => {
        alert('Register failed')
      })
    })
  },
  logout (context) {
    return new Promise((resolve) => {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      resolve('Logout success')
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters
}
