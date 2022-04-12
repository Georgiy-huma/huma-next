import React, { useState } from 'react'
import cx from 'classnames'

import Link from 'next/link'
import HumaLogo from './HumaLogo'
import NavArrow from './NavArrow'
import arrowDown from '../../assets/img/svg/arrow-down.svg'
import arrowRight from '../../assets/img/svg/arrow-right.svg'

import styles from './NavBar.module.scss'

const NavBar = () => {

  const [ linkClassList, setLinkClassList ] = useState([])
  const [ navBarOpen, setNavBarOpen ] = useState(false)

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
    setLinkClassList([ styles.fadedOutLink ])
  }

  const removeHighLight = () => {
    setLinkClassList([])
  }

  const handleMobileNav = () => {
    setNavBarOpen(!navBarOpen)
  }

  const navbarClassNames = cx(styles.navbar, { [styles.open]: navBarOpen })

  return <nav className={navbarClassNames}>
    <div className={styles.humaLogo}>
      <Link href='/'><a onClick={handleMobileNav}><HumaLogo /></a></Link>
    </div>
    <div className={styles.linksContainer}>
      <ul onMouseEnter={highlightLinks}
          onMouseLeave={removeHighLight}
      >
        <li className={styles.platform}>
          <a className={linkClassList}>
            <span>platform</span> {NavArrowDown}
          </a>
          <div className={styles.platformDropdown}>
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
        <li className={styles.humaLabs}>
          <a className={linkClassList}>
            <span>huma labs</span> {NavArrowDown}
          </a>
        </li>
        <li className={styles.partners}>
          <a className={linkClassList}>
            partners
          </a>
        </li>
        <li className={styles.media}>
          <a className={linkClassList}>
            <span>media</span> {NavArrowDown}
          </a>
        </li>
        <li className={styles.contact}>
          <a className={linkClassList}>
            contact
          </a>
        </li>
      </ul>
    </div>
    {/* svg background, no idea at the moment how to move it somewhere else */}
    <svg
      className={styles.navSvgBackground}
      version="1.1" xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200%" height="200%" x="-65%" y="-65%" fill="url(#gradient1a)"></rect>
      <rect width="200%" height="200%" x="10%" y="-80%" fill="url(#gradient1b)"></rect>
      <rect width="200%" height="150%" x="-50%" y="30%" fill="url(#gradient1c)"></rect>
      <defs>
        <radialGradient id="gradient1a">
          <stop offset="0%" stopColor="#F2C9C9">
            <animate
              attributeName="stop-color"
              values="#F2C9C9;#FFFFFF;#DCD5F5;#FFE7C1;#FFFFFF;#FFE7C1;#F2C9C9"
              dur="20s"
              repeatCount="indefinite">
            </animate>
          </stop>
          <stop offset="100%" stopColor="#FFFFFF" />
        </radialGradient>

        <radialGradient id="gradient1b">
          <stop offset="0%" stopColor="#CBEBF0">
            <animate
              attributeName="stop-color"
              values="#CBEBF0;#DCD5F5;#FFFFFF;#CBEBF0;#DCD5F5;#FFFFFF;#CBEBF0"
              dur="20s"
              repeatCount="indefinite">
            </animate>
          </stop>
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0"/>
        </radialGradient>

        <radialGradient id="gradient1c">
          <stop offset="0%" stopColor="#FFFFFF">
            <animate
              attributeName="stop-color"
              values="#FFFFFF;#FFE7C1;#F2C9C9;#FFFFFF;#CBEBF0;#F2C9C9;#FFFFFF"
              dur="20s"
              repeatCount="indefinite">
            </animate>
          </stop>
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  </nav>
}

export default NavBar
