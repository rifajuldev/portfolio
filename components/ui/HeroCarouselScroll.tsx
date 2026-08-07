'use client'
import { useAppContext } from '@/lib/context/appContext'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import Skeleton from 'react-loading-skeleton'

const HeroCarouselScroll = () => {
  const { technologies } = useAppContext()

  return (
    <>
      {technologies.length > 0 ? (
        <div className="flex gap-x-6">
          <div className="mt-4 w-7/12 flex-none lg:mt-0">
            <div>
              <ul className="my-[10px] flex overflow-hidden p-0">
                <Marquee pauseOnHover={true} speed={75}>
                  {technologies
                    .filter(({ show_in_hero }) => show_in_hero)
                    .map(({ _id, tech_name, tech_img_url, tech_official_url }) => (
                      <li key={_id} className="mx-[10px] text-center">
                        <Link
                          href={tech_official_url}
                          className="border-border-1 hover:text-primary-2 inline-flex h-[60px] w-[60px] items-center justify-center rounded-lg border bg-[#f8f8f8] text-center align-middle leading-[60px] hover:border-none hover:bg-[#242424] hover:transition-all hover:duration-300 hover:ease-in-out dark:bg-neutral-800 dark:hover:!border-0 dark:hover:bg-[#242424]"
                          target="_blank"
                        >
                          <img src={tech_img_url} alt={tech_name} className="h-auto w-auto" />
                        </Link>
                      </li>
                    ))}
                </Marquee>
              </ul>
            </div>
          </div>

          <div className="flex w-5/12 flex-none items-end">
            <span className="mb-2 text-base font-normal text-neutral-300">...and more</span>
          </div>
        </div>
      ) : (
        <Skeleton height={60} style={{ marginBottom: 18 }} />
      )}
    </>
  )
}

export default HeroCarouselScroll
