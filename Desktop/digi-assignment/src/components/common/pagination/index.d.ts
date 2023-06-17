export interface PaginationProps {
  pageNumbers: number
  currentPage: number
  onChange: (pageNumber: number) => void
}
