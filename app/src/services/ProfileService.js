import axios from '../core/config/axios'


const ProfileService = class {
    getProfile() {
        return axios.get('/profile')
          .then(({ data }) => data)
    }
  }
  
  export default new ProfileService();