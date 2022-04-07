import React from 'react'
// import { number } from 'prop-types'
import HumaLogo from './HumaLogo'
import ArrowDown from './ArrowDown'

import classes from './NavBar.module.scss'

const NavBar = () => {

  return <nav className={classes.navbar}>
    <div className={classes.humaLogo}>
      <HumaLogo />
    </div>
    <div className={classes.linksContainer}>
      <ul>
        <li>
          <a><span>platform</span> <ArrowDown /></a>
        </li>
        <li>
          <a><span>huma labs</span> <ArrowDown /></a>
        </li>
        <li>
          partners
        </li>
        <li>
          <a><span>media</span> <ArrowDown /></a>
        </li>
        <li>
          contact
        </li>
      </ul>
    </div>
  </nav>
}

export default NavBar
