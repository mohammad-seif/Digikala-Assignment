import type { CardProps } from './index.d'

import classes from './index.module.scss'

const Card = ({ title, thumbnail, desc, onActionClick }: CardProps) => {
  return (
    <div className={classes['card']}>
      <div className={classes['card-image']}>
        <img
          alt={title}
          src={thumbnail}
          loading="lazy"
        />
      </div>
      <h1 className={classes['card-title']}>{title}</h1>
      <p className={classes['card-desc']}>{desc}</p>
      <button
        onClick={onActionClick}
        className={classes['card-action']}
      >
        Show Detail
      </button>
    </div>
  )
}

export default Card
