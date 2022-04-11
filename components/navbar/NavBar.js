import React, { useState } from 'react'

import Link from 'next/link'
import HumaLogo from './HumaLogo'
import NavArrow from './NavArrow'
import arrowDown from '../../assets/img/svg/arrow-down.svg'
import arrowRight from '../../assets/img/svg/arrow-right.svg'

import classes from './NavBar.module.scss'

const NavBar = () => {

  const [ linkClassList, setLinkClassList ] = useState([])

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

  // const navLinks = ['platform', 'huma labs', 'partners', 'media', 'contact']
  // const platformLinks = ['hospital at home', 'episodic care', 'chronic care']

  const highlightLinks = () => {
    setLinkClassList([ classes.fadedOutLink ])
  }

  const removeHighLight = () => {
    setLinkClassList([])
  }

  return <nav className={classes.navbar}>
    <div className={classes.humaLogo}>
      <Link href='/'><a><HumaLogo /></a></Link>
    </div>
    <div className={classes.linksContainer}>
      <ul onMouseEnter={highlightLinks}
          onMouseLeave={removeHighLight}
      >
        <li className={classes.platform}>
          <a className={linkClassList}>
            <span>platform</span> {NavArrowDown}
          </a>
          <div className={classes.platformDropdown}>
            <ul>
              <li>
                <a className={linkClassList}>
                  <span>Hospital at home</span> {NavArrowRight}
                </a>
              </li>
              <li>
                <a className={linkClassList}>
                  <span>Episodic care</span> {NavArrowRight}
                </a>
              </li>
              <li>
                <a className={linkClassList}>
                  <span>Chronic care</span>
                  {NavArrowRight}
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className={classes.humaLabs}>
          <a className={linkClassList}>
            <span>huma labs</span> {NavArrowDown}
          </a>
        </li>
        <li className={classes.partners}>
          <a className={linkClassList}>
            partners
          </a>
        </li>
        <li className={classes.media}>
          <a className={linkClassList}>
            <span>media</span> {NavArrowDown}
          </a>
        </li>
        <li className={classes.contact}>
          <a className={linkClassList}>
            contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
}

export default NavBar
