import React, { useEffect } from 'react'
// import { children } from '../../propTypes'
import { number } from 'prop-types'

import classes from './GradientBackground.module.scss'

/* colour sequence:
1. red, blue, transparent,
2. transparent, purple, yellow
3. purple, transparent, red
4. yellow, blue, transparent
5. transparent, purple, blue
6. yellow, transparent, red

red: #F2C9C9
blue: #CBEBF0
purple: #DCD5F5
yellow: #FFDA9F (theme is #FFE7C1, but too strong)
<div className="animated-gradients position-fixed">
xmlns:xlink="http://www.w3.org/1999/xlink"
*/

const GradientBackground = ({ children, height }) => { // children??

  // const [ height, setHeight ] = useState(0)
  // const ref = useRef(null)

  useEffect(() => {
    // setHeight(ref.current.clientHeight)
    console.log('SVG height', height)
  }, [ height ])

  const currentHeight = {
    height: height + 'px'
  }


  return (
    <div style={currentHeight} className={classes.animatedGradients}>
      <svg
        style={currentHeight}
        className={classes.animatedGradientsSvg}
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
      {children}
    </div>
  )
}


GradientBackground.propTypes = {
  // children,
  height: number

}

GradientBackground.defaultProps = {
  children: [],
  number: 0
}

export default GradientBackground
