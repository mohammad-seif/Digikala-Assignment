import { useCallback, useState } from 'react'

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false)
  }, [])

  const handleOpenModal = useCallback(() => {
    setIsOpenModal(true)
  }, [])

  return { isOpenModal, handleCloseModal, handleOpenModal }
}

export default useModal
