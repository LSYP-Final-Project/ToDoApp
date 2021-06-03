import axios from 'Core/config/axios'

const SprintsServices = class {
    getSprints() {
        return axios.get('/sprints')
            .then(({data}) => data)
    }

    getSprint(id) {
        return axios.get(`/sprints/${id}`)
            .then(({ data }) => data)
    }

    postSprint(sprint) {
        return axios.post(`/sprints`, sprint)
            .then(({ data }) => data)
    }

    putSprint(sprint) {
        return axios.put(`/sprints/${sprint.id}`, sprint)
            .then(( { data }) => data)
    }

    deleteSprint(id) {
        return axios.delete(`/sprints/${id}`)
            .then(({ data }) => data)
    }
}

export default new SprintsServices();