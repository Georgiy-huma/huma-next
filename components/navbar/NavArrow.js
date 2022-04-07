import Image from 'next/image'
import { string, object } from 'prop-types'

const NavArrow = props => <Image {...props} />

NavArrow.propTypes = {
  src: object,
  width: string,
  height: string,
  alt: string
}

NavArrow.defaultProps = {
  src: {},
  width: '8',
  height: '4',
  alt: ''
}

export default NavArrow
