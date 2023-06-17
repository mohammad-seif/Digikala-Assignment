import Home from '@/components/pages/home'
import { LIST_PAGE_NUMBER } from '@/constants'
import { getProducts } from '@/services'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [keyword, setKeyword] = useState('')

  const { data, isLoading } = useQuery(
    ['products', currentPage, keyword],
    async () =>
      await getProducts(currentPage * LIST_PAGE_NUMBER, LIST_PAGE_NUMBER, {
        key: 'title',
        value: keyword
      }),
    {
      keepPreviousData: true
    }
  )

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data && (
          <Home
            items={data}
            onPageChange={setCurrentPage}
            onKeywordChange={setKeyword}
            currentPage={currentPage}
          />
        )
      )}
    </>
  )
}

export default HomePage
