'use client'
import { useAppContext } from '@/lib/context/appContext'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightUpLine } from 'react-icons/ri'
import Skeleton from 'react-loading-skeleton'
import SectionHeading from '../ui/SectionHeading'

const Blog = () => {
  const { blogs } = useAppContext()

  return (
    <section id="blog" className="relative pb-15">
      {/* Section Heading Start */}
      <SectionHeading sectionName="Latest Posts" headings={[{ title: 'From Blog' }]} center={true} />
      {/* Section Heading End */}

      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {blogs.length > 0 ? (
          blogs.slice(0, 3).map(({ _id, tag, img_url, date, read_time, title, desc }) => (
            <Link key={_id} href={`/blogs/${_id}`} className="blog-card group mb-4 rounded-t-md md:mb-8 lg:mb-4">
              {/* Card Image */}
              <div className="relative mb-6">
                <div className="relative translate-z-0 transform overflow-hidden rounded-md">
                  <Image
                    className="h-full w-full transform transition-transform duration-300 hover:scale-105"
                    src={img_url}
                    alt={title}
                    height={600}
                    width={600}
                  />
                  <span className="text-neutral-0 bg-neutral-1000 hover:text-primary-2 hover:border-primary-2 absolute bottom-0 left-0 m-4 rounded-md border border-white px-4 py-1 text-sm font-medium duration-300">
                    {tag}
                  </span>

                  <div className="bg-primary-2 absolute top-1/2 left-1/2 inline-flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center align-middle leading-10 opacity-0 group-hover:opacity-100">
                    <span className="relative inline-block">
                      <RiArrowRightUpLine
                        size={24}
                        className="group-hover:animate-hover-icon-exit absolute text-black transition-transform duration-500 ease-in-out"
                      />
                      <RiArrowRightUpLine
                        size={24}
                        className="group-hover:animate-hover-icon-enter text-black transition-transform duration-500 ease-in-out"
                      />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="relative text-center">
                <span className="flex justify-center text-[14px]">
                  {new Intl.DateTimeFormat('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  }).format(new Date(date))}{' '}
                  • {read_time} read
                </span>
                <h6 className="hover:text-primary-2 mt-2 transition-all duration-200 ease-in-out">{title}</h6>
                <p className="text-[14px]">{desc}</p>
              </div>
            </Link>
          ))
        ) : (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="blog-card mb-4 rounded-t-md md:mb-8 lg:mb-4">
                <Skeleton height={270} style={{ marginBottom: '20px' }} />
                <Skeleton height={25} style={{ marginBottom: '10px' }} />
                <Skeleton height={45} style={{ marginBottom: '20px' }} />
                <Skeleton count={2} height={20} />
              </div>
            ))}
          </>
        )}
      </div>

      {/* View All Blogs Button */}
      <div className="mt-8 text-center md:mt-12">
        <Link
          href="/blogs"
          className="bg-primary-2 hover:bg-primary-2/90 shadow-primary-2/20 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105"
        >
          View All Blogs <RiArrowRightUpLine size={18} />
        </Link>
      </div>
    </section>
  )
}

export default Blog
