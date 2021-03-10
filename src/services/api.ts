import axios from 'axios'

const api = axios.create({
  baseURL: 'https://iris-api-classifier.herokuapp.com/api',
})

export default api