import axios from '../core/config/axios'


const PostsServices = class {
    getPosts() {
        return axios.get('/posts')
          .then(({ data }) => data)
    }
    getPost(id) {
        return axios.get(`/posts/${id}`)
            .then(({ data }) => data)
    }
    postPost(post) {
        return axios.post(`/posts`, post)
            .then(({ data }) => data)
    }
    putPost(post) {
        return axios.put(`/posts/${post.id}`, post)
            .then(({ data }) => data)
    }
    deletePost(id) {
        return axios.delete(`/posts/${id}`)
            .then(({ data }) => data)
    }
  }
  
  export default new PostsServices();