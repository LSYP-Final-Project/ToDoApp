import axios from 'Core/config/axios'


const TodosServices = class {
    getTodos() {
      return axios.get('/todos')
        .then(({ data }) => data)
    }
    getSearchTodos(searchText) {
       return axios.get(`/todos?q=${searchText}`)
         .then(({ data }) => data);
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
  }
  
  export default new TodosServices();