import { IProduct } from '@/models/product'

export interface HomeProps {
  items: IProduct[]
  currentPage: number
  onPageChange: (page: number) => void
  onKeywordChange: (keyword: string) => void
}
