import axios from 'Core/config/axios'


const CommentsServices = class {
    getComments() {
      return axios.get('/comments')
        .then(({ data }) => data)
    }
    getComment(id) {
      return axios.get(`/comments/${id}`)
        .then(({ data }) => data)
    }
    postComment(comment) {
      return axios.post(`/comments`, comment)
        .then(({ data }) => data)
    }
    putComment(comment) {
        return axios.put(`/comments/${comment.id}`, comment)
          .then(({ data }) => data)
      }
    deleteComment(id) {
      return axios.delete(`/comments/${id}`)
        .then(({ data }) => data)
    }
  }
  
  export default new CommentsServices();