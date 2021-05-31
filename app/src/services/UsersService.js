import axios from '../core/config/axios'


const UsersServices = class {
  getUsers() {
    return axios.get('/users')
      .then(({ data }) => data)
  }
  getUser(id) {
    return axios.get(`/users/${id}`)
      .then(({ data }) => data)
  }
  postUser(user) {
    return axios.post(`/users`, user)
      .then(({ data }) => data)
  }
  putUser(user) {
    return axios.put(`/users/${user.id}`, user)
      .then(({ data }) => data)
  }
  deleteUser(id) {
    return axios.delete(`/users/${id}`)
      .then(({ data }) => data)
  }
}

export default new UsersServices();