import Header from '@/components/layout/header'

import classes from './default.module.scss'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes['main-layout']}>{children}</main>
    </>
  )
}

export default DefaultLayout
