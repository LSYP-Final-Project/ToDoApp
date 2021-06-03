import axios from '../core/config/axios'


const TodosServices = class {
    getTodos() {
      return axios.get('/todos')
        .then(({ data }) => data)
    }
    getTodo(id) {
      return axios.get(`/todos/${id}`)
        .then(({ data }) => data)
    }
    postTodo(todo) {
      return axios.post(`/todos`, todo)
        .then(({ data }) => data)
    }
    putTodo(todo) {
      return axios.put(`/todos/${todo.id}`, todo)
        .then(({ data }) => data)
    }
    deleteTodo(id) {
      return axios.delete(`/todos/${id}`)
        .then(({ data }) => data)
    }
    getUserTodos(userId) {
      return axios.get(`/todos?userId=${userId}`)
        .then(({ data }) => data)
    }
  }
  
  export default new TodosServices();