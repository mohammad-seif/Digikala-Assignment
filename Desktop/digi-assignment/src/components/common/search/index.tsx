import type { SearchProps } from './index.d'

import React from 'react'

import { debounce } from '@/utils'

import classes from './index.module.scss'

const Search = ({ onChange }: SearchProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className={classes['field-wrapper']}>
      <input
        placeholder="Search"
        className={classes['field-wrapper__input']}
        onChange={debounce(handleSearch, 1500)}
      />
    </div>
  )
}

export default Search
