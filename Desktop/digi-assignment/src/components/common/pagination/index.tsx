import type { PaginationProps } from './index.d'

import { useMemo } from 'react'

import classes from './index.module.scss'

const Pagination = ({
  pageNumbers,
  onChange,
  currentPage
}: PaginationProps) => {
  const numbers = useMemo(
    () => Array.from({ length: pageNumbers }, (_, i) => i),
    [pageNumbers]
  )

  return (
    <div className={classes['pagination']}>
      <button
        className={classes['pagination-prev']}
        disabled={currentPage === 0}
        onClick={() => onChange(currentPage - 1)}
      >
        Previous
      </button>
      <ul className={classes['pagination-list']}>
        {numbers.map((num) => (
          <li
            role="button"
            onClick={() => onChange(num)}
            key={num}
            className={`${classes['pagination-list__item']} ${
              currentPage === num
                ? classes['pagination-list__item--active']
                : ''
            }`}
          >
            {num + 1}
          </li>
        ))}
      </ul>
      <button
        disabled={currentPage === pageNumbers}
        className={classes['pagination-next']}
        onClick={() => onChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
