import classes from './index.module.scss'

import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={classes['nav']} aria-label="navigation-bar" role="navigation">
      <ul className={classes['nav-list']}>
        <li className={classes['nav-list__item']}>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className={classes['nav-list__item']}>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
