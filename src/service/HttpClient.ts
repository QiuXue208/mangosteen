import axios, { AxiosRequestConfig, AxiosInstance } from "axios"
import type { JSONValue } from './index'

export default class Http {
  instance: AxiosInstance

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL
    })
  }

  get<R = unknown>(url: string, query?: Record<string, string> ,config?: Omit<AxiosRequestConfig, 'params'>) {
    return this.instance.request<R>({
      ...config,
      method: 'get',
      url,
      params: query,
    })
  }

  post<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: Omit<AxiosRequestConfig, 'data'>) {
    return this.instance.request<R>({
      ...config,
      method: 'post',
      url,
      data,
    })
  }

  patch<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: Omit<AxiosRequestConfig, 'data'>) {
    return this.instance.request<R>({
      ...config,
      method: 'patch',
      url,
      data,
    })
  }

  delete<R = unknown>(url: string, query: Record<string, string>, config?: Omit<AxiosRequestConfig, 'params'>) {
    return this.instance.request<R>({
      ...config,
      method: 'delete',
      url,
      params: query,
    })
  }
}