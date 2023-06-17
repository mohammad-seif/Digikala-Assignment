import type { IProduct } from '@/models/product'

import HttpClient from '../http'

const httpClient = HttpClient.getInstance()

export const getProducts = async (
  offset: number,
  limit: number,
  filter: { key: string; value: string }
) =>
  await httpClient.get<IProduct[]>('/products', {
    params: { offset, limit, [filter.key]: filter?.value }
  })

export const getProductById = async (id: number) =>
  await httpClient.get<IProduct>(`/products/${id}`)
