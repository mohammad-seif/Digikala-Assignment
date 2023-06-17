import type { ProductModalProps } from './index.d'

import { useQuery } from '@tanstack/react-query'
import classes from './index.module.scss'
import { getProductById } from '@/services'

const ProductModal = ({ id }: ProductModalProps) => {
  const { data, isLoading } = useQuery(
    [id],
    async () => await getProductById(id)
  )

  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : (
        <section className={classes['product-modal']}>
          <div className={classes['product-modal-image']}>
            <img
              src={data?.images[0]}
              alt={data?.title}
            />
          </div>
          <div className={classes['product-modal-content']}>
            <h1 className={classes['product-modal-content__title']}>
              {data?.title}
            </h1>
            <p className={classes['product-modal-content__desc']}>
              {data?.description}
            </p>
          </div>
        </section>
      )}
    </>
  )
}

export default ProductModal
