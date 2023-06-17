import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import type { DefaultResponse, HttpClientAbstraction } from './index.d'

import axios from '@/libs/axios'

class HttpClient implements HttpClientAbstraction {
  private static instance: HttpClient
  private readonly _httpClient: AxiosInstance

  private constructor() {
    this._httpClient = axios
  }

  get httpClient() {
    return this._httpClient
  }

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient()
    }
    return HttpClient.instance
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T & DefaultResponse> =
      await this.httpClient.get(url, config)
    return response.data
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T & DefaultResponse> =
      await this.httpClient.post(url, data, config)
    return response.data
  }

  public addResponseInterceptor(): void {
    this.httpClient.interceptors.response.use(
      ({ data }) => data,
      (err) => Promise.reject(err)
    )
  }
}

export default HttpClient
