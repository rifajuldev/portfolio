'use client'
import { useAppContext } from '@/lib/context/appContext'
import Marquee from 'react-fast-marquee'
import Skeleton from 'react-loading-skeleton'

const CooperationSlide = () => {
  const { cooperations } = useAppContext()

  // Separate Brands by Position
  const topBrands = cooperations.filter((brand) => brand.company_position === 'Top')
  const bottomBrands = cooperations.filter((brand) => brand.company_position === 'Bottom')

  return (
    <div>
      {/* Marquee For Left-direction Brands */}
      {cooperations.length > 0 ? (
        <ul className="my-[10px] flex overflow-hidden p-0">
          <Marquee pauseOnHover={true} speed={35} direction="left">
            {topBrands.map(({ _id, company_name, logo_url }) => (
              <li key={_id} className="float-left mx-[50px] text-center">
                <img src={logo_url} alt={company_name} />
              </li>
            ))}
          </Marquee>
        </ul>
      ) : (
        <Skeleton height={40} />
      )}

      {/* Marquee For Right-direction Brands */}
      {cooperations.length > 0 ? (
        <ul className="my-[10px] flex overflow-hidden p-0">
          <Marquee pauseOnHover={true} speed={35} direction="right">
            {bottomBrands.map(({ _id, company_name, logo_url }) => (
              <li key={_id} className="float-left mx-[50px] text-center">
                <img src={logo_url} alt={company_name} />
              </li>
            ))}
          </Marquee>
        </ul>
      ) : (
        <Skeleton height={40} />
      )}
    </div>
  )
}

export default CooperationSlide
