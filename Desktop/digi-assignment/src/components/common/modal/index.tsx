import type { ModalProps } from './index.d'

import classes from './index.module.scss'

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return

  return (
    <div
      className={classes['modal']}
      role="presentation"
    >
      <div
        className={classes['modal-backdrop']}
        onClick={onClose}
      />
      <div className={classes['modal-content']}>{children}</div>
    </div>
  )
}

export default Modal
