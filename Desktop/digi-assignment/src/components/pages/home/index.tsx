import type { HomeProps } from './index.d'

import classes from './index.module.scss'

import { useState } from 'react'

import Card from '@/components/common/card'
import Pagination from '@/components/common/pagination'
import Modal from '@/components/common/modal'
import Search from '@/components/common/search'
import { LIST_PAGE_NUMBER } from '@/constants'

import useModal from '@/hooks/use-modal'

import ProductModal from './product-modal'

const Home = ({
  items,
  currentPage,
  onPageChange,
  onKeywordChange
}: HomeProps) => {
  const [selectedCard, setSelectedCard] = useState(0)

  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal()

  const handleClick = (id: number): void => {
    setSelectedCard(id)
    handleOpenModal()
  }

  return (
    <>
      <Search onChange={onKeywordChange} />
      <section className={classes['card-wrapper']}>
        {items.map(({ id, description, images, title }) => (
          <Card
            id={id}
            key={id}
            thumbnail={images[0]}
            desc={description}
            title={title}
            onActionClick={() => handleClick(id)}
          />
        ))}
      </section>
      <section>
        <Pagination
          pageNumbers={LIST_PAGE_NUMBER}
          currentPage={currentPage}
          onChange={onPageChange}
        />
      </section>
      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
      >
        <ProductModal id={selectedCard} />
      </Modal>
    </>
  )
}

export default Home
