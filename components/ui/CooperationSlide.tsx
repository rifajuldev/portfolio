'use client'
import { cooperations } from '@/constants'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const CooperationSlide = () => {
  const topBrands = cooperations.filter((brand) => brand.company_position === 'Top')
  const bottomBrands = cooperations.filter((brand) => brand.company_position === 'Bottom')

  return (
    <div>
      <ul className="my-2.5 flex overflow-hidden p-0">
        <Marquee pauseOnHover={true} speed={35} direction="left">
          {topBrands.map(({ company_name, logo_url }) => (
            <li key={company_name} className="float-left mx-12.5 text-center">
              <Image src={logo_url} alt={company_name} width={100} height={100} />
            </li>
          ))}
        </Marquee>
      </ul>

      <ul className="my-2.5 flex overflow-hidden p-0">
        <Marquee pauseOnHover={true} speed={35} direction="right">
          {bottomBrands.map(({ company_name, logo_url }) => (
            <li key={company_name} className="float-left mx-12.5 text-center">
              <Image src={logo_url} alt={company_name} width={100} height={100} />
            </li>
          ))}
        </Marquee>
      </ul>
    </div>
  )
}

export default CooperationSlide
