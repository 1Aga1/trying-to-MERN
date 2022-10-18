import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const reg = () => api.get('/reg')
export const insertUser = payload => api.post('/reg?', payload)

const apis = {
    insertUser
}

export default apis