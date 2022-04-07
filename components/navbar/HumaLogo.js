import Image from 'next/image'
import logo from '../../assets/img/svg/huma-logo.svg'

const HumaLogo = (props) => {
  return (
    <Image
      src={logo}
      alt="Huma logo"
      width="34px"
      height="34px"
    />
  )
}

export default HumaLogo
