import Http from './HttpClient'
import { AxiosRequestConfig } from 'axios'

export type JSONValue = string | number | boolean | null | JSONValue[] | { [k: string]: JSONValue }


export const http = new Http('/api/v1')

http.instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, error => {
  return Promise.reject(error)
})

http.instance.interceptors.response.use((response) => {
  return response
}, error => {
  return Promise.reject(error)
})

