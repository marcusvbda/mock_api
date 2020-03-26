import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_HOST,
})

api.processError = er => {
    let error = `${er.response.status} (${er.response.statusText})`
    if (er.response) if (er.response.data) if (er.response.data.error)
        error = (er.response.data.error)
    return error
}

api.setAuth = (token) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
}

export default api
