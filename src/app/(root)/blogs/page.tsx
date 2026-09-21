'use client'
import SectionHeading from '@/components/ui/SectionHeading'
import { useAppContext } from '@/lib/context/appContext'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { RiArrowRightUpLine, RiPriceTag3Line, RiRefreshLine, RiSearchLine } from 'react-icons/ri'

const LIMIT_STEP = 9

export default function BlogsPage() {
  const { blogs } = useAppContext()
  const [displayedCount, setDisplayedCount] = useState<number>(LIMIT_STEP)
  const [selectedTag, setSelectedTag] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

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
    <div className="py-12 md:py-20">
      {/* Top Header & Section Heading */}
      <div className="mb-10 text-center">
        <SectionHeading
          sectionName="Our Insights"
          headings={[{ title: 'Latest Articles & Blog Posts' }]}
          center={true}
        />
        <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 md:text-lg">
          Explore in-depth tutorials, technical guides, architectural best practices, and insights on modern full-stack
          web development.
        </p>
      </div>

      {/* Filter Tags & Search Controls */}
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Category Tags */}
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
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-primary-2 shadow-primary-2/20 scale-105 text-black shadow-lg'
                    : 'border-border-1 hover:border-primary-2/50 bg-neutral-900/60 text-neutral-300 hover:text-white'
                }`}
              >
                {tag !== 'All' && <RiPriceTag3Line size={14} />}
                {tag}
              </button>
            )
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <RiSearchLine className="absolute top-1/2 left-3.5 -translate-y-1/2 text-neutral-400" size={18} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setDisplayedCount(LIMIT_STEP)
            }}
            className="border-border-1 focus:border-primary-2 w-full rounded-lg border bg-neutral-900/80 py-2.5 pr-4 pl-10 text-sm text-neutral-100 transition outline-none placeholder:text-neutral-500"
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      {visibleBlogs.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map(({ _id, tag, img_url, date, read_time, title, desc }) => (
            <Link
              key={_id}
              href={`/blogs/${_id}`}
              className="blog-card group border-border-1 hover:border-primary-2/40 hover:shadow-primary-2/10 flex flex-col overflow-hidden rounded-xl border bg-neutral-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
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
                <span className="text-primary-2 border-primary-2/30 absolute top-3 left-3 rounded-md border bg-neutral-950/90 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                  {tag}
                </span>

                {/* Hover Icon Badge */}
                <div className="bg-primary-2 absolute top-1/2 left-1/2 inline-flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center opacity-0 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                  <RiArrowRightUpLine size={22} className="text-black" />
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

                <h3 className="group-hover:text-primary-2 mb-2 line-clamp-2 text-lg font-semibold text-white transition-colors duration-200">
                  {title}
                </h3>

                <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-400">{desc}</p>

                <div className="text-primary-2 mt-auto flex items-center text-xs font-semibold transition-transform duration-200 group-hover:translate-x-1">
                  Read Full Article <RiArrowRightUpLine className="ml-1" size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="border-border-1 my-12 rounded-xl border bg-neutral-900/30 py-16 text-center">
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
            className="bg-primary-2 hover:bg-primary-2/90 shadow-primary-2/20 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105"
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
