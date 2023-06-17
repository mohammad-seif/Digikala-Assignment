import { AxiosInstance } from 'axios'

export type Dictionary<T> = { [key: string]: T }

export interface DefaultResponse {
  offset: number
  limit: number
  success: boolean
}

export interface Options {
  body: any
  headers: Dictionary<string>
  json: unknown
  searchParams: Dictionary<string | number | boolean>
}

export interface HttpClientAbstraction {
  httpClient: AxiosInstance
  get<T>(url: string, option?: Partial<Options>): Promise<T>
  post<T>(url: string, option?: Partial<Options>): Promise<T>
}
