import React from 'react'

import HumaLogo from './HumaLogo'
import NavArrow from './NavArrow'
import arrowDown from '../../assets/img/svg/arrow-down.svg'
import arrowRight from '../../assets/img/svg/arrow-right.svg'

import classes from './NavBar.module.scss'

const NavBar = () => {

  const NavArrowDown =
    <NavArrow
      src={arrowDown}
      height={'4'}
      width={'8'}
    />

  const NavArrowRight =
    <NavArrow
      src={arrowRight}
      height={'9'}
      width={'5'}
    />

  return <nav className={classes.navbar}>
    <div className={classes.humaLogo}>
      <HumaLogo />
    </div>
    <div className={classes.linksContainer}>
      <ul>
        <li className={classes.platform}>
          <a><span>platform</span> {NavArrowDown}
          </a>
          <div className={classes.platformDropdown}>
            <ul>
              <li>
                <a><span>Hospital at home</span> {NavArrowRight}</a>
              </li>
              <li>
                <a><span>Episodic care</span> {NavArrowRight}</a>
              </li>
              <li>
                <a><span>Chronic care</span> {NavArrowRight}</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a><span>huma labs</span> {NavArrowDown}</a>
        </li>
        <li>
          partners
        </li>
        <li>
          <a><span>media</span> {NavArrowDown}</a>
        </li>
        <li>
          contact
        </li>
      </ul>
    </div>
  </nav>
}

export default NavBar
