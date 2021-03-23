/* eslint-disable camelcase */
import axios, { AxiosResponse } from 'axios'

interface IRequest {
  sepal_length: number;
  sepal_width: number;
  petal_length: number;
  petal_width: number;
}

const api = axios.create({
  baseURL: 'https://iris-api-classifier.herokuapp.com'
})

export const predictClass = async (requestBody: IRequest): Promise<AxiosResponse> => {
  return await api.post('/api/predict', requestBody)
}

export default api
