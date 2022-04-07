import Image from 'next/image'
import arrow from '../../assets/img/svg/arrow-down.svg'

const ArrowDown = () => {
  return (
    <Image
      src={arrow}
      alt="" // present but empty as is is a decorative nav element
      width="8px"
      height="4px"
    />
  )
}

export default ArrowDown
