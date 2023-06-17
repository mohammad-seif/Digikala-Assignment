import classes from './index.module.scss'

import Logo from '/logo.svg'
import NavBar from '../nav-bar'

const Header = () => {
  return (
    <header className={classes['header']}>
      <div className={classes['header-logo']}>
        <img className={classes['header-logo__image']} alt="logo" src={Logo} />
      </div>
      <h1 className={classes['header-title']}>Awesome UI</h1>
      <NavBar />
    </header>
  )
}

export default Header
