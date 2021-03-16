import axios from 'axios'

const api = axios.create({
  baseURL: 'https://iris-api-classifier.herokuapp.com'
})

export default api
