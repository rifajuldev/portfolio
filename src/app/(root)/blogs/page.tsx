'use client'
import SectionHeading from '@/components/ui/SectionHeading'
import { useAppContext } from '@/lib/context/appContext'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { RiArrowRightUpLine, RiPriceTag3Line, RiRefreshLine, RiSearchLine } from 'react-icons/ri'

const LIMIT_STEP = 9

export default function BlogsPage() {
  const { blogs } = useAppContext()
  const [displayedCount, setDisplayedCount] = useState<number>(LIMIT_STEP)
  const [selectedTag, setSelectedTag] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  // Extract all unique tags
  const tags = useMemo(() => {
    const allTags = blogs.map((blog) => blog.tag).filter(Boolean)
    return ['All', ...Array.from(new Set(allTags))]
  }, [blogs])

  // Filter blogs based on tag and search query
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesTag = selectedTag === 'All' || blog.tag === selectedTag
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tag.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesTag && matchesSearch
    })
  }, [blogs, selectedTag, searchQuery])

  // Currently visible slice
  const visibleBlogs = filteredBlogs.slice(0, displayedCount)
  const hasMore = displayedCount < filteredBlogs.length

  const handleLoadMore = () => {
    setDisplayedCount((prev) => prev + LIMIT_STEP)
  }

  return (
    <div className="pt-6 pb-12 md:pt-8 md:pb-20">
      {/* Top Header & Section Heading */}
      <div className="mb-10 text-center">
        <SectionHeading
          sectionName="Our Insights"
          headings={[{ title: 'Latest Articles & Blog Posts' }]}
          center={true}
        />
        <p className="mx-auto mt-4 max-w-3xl text-base text-neutral-300 md:text-lg">
          Explore in-depth tutorials, technical guides, architectural best practices, and insights on modern Full-stack
          web & app development.
        </p>
      </div>

      {/* Search & Filter Control Panel */}
      <div className="border-border-1 bg-bg-3 mb-10 overflow-hidden rounded-lg border">
        {/* Search Bar Row */}
        <div className="border-border-1 border-b p-4 md:p-5">
          <div className="relative">
            <RiSearchLine className="text-primary-2 absolute top-1/2 left-4 -translate-y-1/2" size={18} />
            <input
              type="text"
              placeholder="Search articles by title, tag or keyword…"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setDisplayedCount(LIMIT_STEP)
              }}
              className="border-border-1 focus:border-primary-2 bg-bg-4 text-neutral-0 w-full rounded-md border py-3 pr-10 pl-11 text-sm transition-all duration-200 outline-none placeholder:text-neutral-500"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setDisplayedCount(LIMIT_STEP)
                }}
                className="absolute top-1/2 right-3.5 -translate-y-1/2 rounded p-1 text-neutral-500 transition duration-200 hover:text-neutral-300"
                aria-label="Clear search"
              >
                <RiRefreshLine size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Filter Tags Row */}
        <div className="flex flex-col gap-3 px-4 py-3.5 md:flex-row md:items-center md:px-5">
          {/* Label */}
          <div className="flex shrink-0 items-center gap-1.5 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
            <RiPriceTag3Line size={13} />
            <span>Filter</span>
          </div>

          {/* Divider — desktop only */}
          <div className="border-border-1 hidden h-4 w-px border-l md:block" />

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => {
              const isActive = selectedTag === tag
              return (
                <button
                  key={tag}
                  onClick={() => {
                    setSelectedTag(tag)
                    setDisplayedCount(LIMIT_STEP)
                  }}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary-2 border-primary-2/40 bg-primary-2/10 border'
                      : 'border-border-1 hover:text-neutral-0 border text-neutral-400 hover:border-neutral-500'
                  }`}
                >
                  {tag !== 'All' && (
                    <RiPriceTag3Line size={12} className={isActive ? 'text-primary-2' : 'text-neutral-500'} />
                  )}
                  {tag}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      {visibleBlogs.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map(({ _id, tag, img_url, date, read_time, title, desc }) => (
            <Link
              key={_id}
              href={`/blogs/${_id}`}
              className="blog-card group border-border-1 bg-bg-3 flex flex-col overflow-hidden rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30"
            >
              {/* Image Container */}
              <div className="relative mb-5 overflow-hidden rounded-lg">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={img_url}
                    alt={title}
                    height={400}
                    width={600}
                  />
                </div>
                <span className="border-border-1 bg-bg-4 absolute top-3 left-3 rounded-md border px-3 py-1 text-xs font-semibold text-neutral-300 backdrop-blur-md">
                  {tag}
                </span>

                {/* Hover Icon Badge — matches home blog card style */}
                <div className="bg-primary-2 absolute top-1/2 left-1/2 inline-flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center align-middle leading-10 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="relative inline-block">
                    <RiArrowRightUpLine
                      size={22}
                      className="group-hover:animate-hover-icon-exit absolute text-black transition-transform duration-500 ease-in-out"
                    />
                    <RiArrowRightUpLine
                      size={22}
                      className="group-hover:animate-hover-icon-enter text-black transition-transform duration-500 ease-in-out"
                    />
                  </span>
                </div>
              </div>

              {/* Card Meta & Details */}
              <div className="flex flex-1 flex-col">
                <div className="mb-2 flex items-center text-xs text-neutral-400">
                  <span>
                    {new Intl.DateTimeFormat('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    }).format(new Date(date))}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{read_time} read</span>
                </div>

                <h3 className="text-neutral-0 group-hover:text-primary-2 mb-2 line-clamp-2 text-lg font-semibold transition-colors duration-200">
                  {title}
                </h3>

                <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-300">{desc}</p>

                <div className="group-hover:text-primary-2 mt-auto flex items-center text-xs font-semibold text-neutral-400 transition-all duration-200 group-hover:translate-x-1">
                  Read Full Article <RiArrowRightUpLine className="ml-1" size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="border-border-1 bg-bg-3 my-12 rounded-xl border py-16 text-center">
          <p className="text-lg font-medium text-neutral-400">No articles found matching your filter.</p>
          <button
            onClick={() => {
              setSelectedTag('All')
              setSearchQuery('')
            }}
            className="text-primary-2 border-primary-2/40 hover:bg-primary-2/10 mt-4 inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition"
          >
            <RiRefreshLine size={18} /> Reset Filters
          </button>
        </div>
      )}

      {/* Pagination / Load More Section */}
      {hasMore && (
        <div className="mt-14 flex flex-col items-center justify-center gap-3">
          <button
            onClick={handleLoadMore}
            className="group text-neutral-1000 bg-primary-2 font-secondary inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full px-8 py-3 text-center text-[14px] leading-3.5 font-bold transition-all duration-300 ease-in-out md:px-10 md:py-4"
          >
            Load More Articles ({filteredBlogs.length - visibleBlogs.length} remaining)
          </button>
          <span className="text-xs text-neutral-500">
            Showing {visibleBlogs.length} of {filteredBlogs.length} articles
          </span>
        </div>
      )}
    </div>
  )
}
