import ScrollToTop from '@/components/ui/ScrollToTop'
import { blogs } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  RiArrowLeftLine,
  RiArrowRightUpLine,
  RiCalendarLine,
  RiCheckDoubleLine,
  RiCheckLine,
  RiFileTextLine,
  RiFolder3Line,
  RiLinkedinFill,
  RiShareLine,
  RiTimeLine,
  RiTwitterXFill,
} from 'react-icons/ri'

interface BlogDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog._id,
  }))
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { id } = await params
  const blog = blogs.find((b) => b._id === id)

  if (!blog) {
    notFound()
  }

  // Related articles (excluding current blog)
  const relatedBlogs = blogs.filter((b) => b._id !== blog._id).slice(0, 3)

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(blog.date))

  return (
    <article className="pt-4 pb-10 md:pt-6 md:pb-16">
      {/* Scroll to top on navigation */}
      <ScrollToTop />

      {/* Top Navigation & Breadcrumbs */}
      <div className="border-border-1 mb-8 flex flex-wrap items-center justify-between gap-4 border-b pb-6">
        <Link
          href="/blogs"
          className="border-border-1 bg-bg-3 hover:border-primary-2 hover:text-primary-2 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-neutral-300 transition"
        >
          <RiArrowLeftLine size={18} /> Back to Blogs
        </Link>

        <nav className="flex items-center gap-2 text-xs text-neutral-400">
          <Link href="/" className="hover:text-primary-2 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/blogs" className="hover:text-primary-2 transition">
            Blogs
          </Link>
          <span>/</span>
          <span className="text-neutral-0 max-w-50 truncate sm:max-w-xs">{blog.title}</span>
        </nav>
      </div>

      {/* Blog Article Header */}
      <header className="mb-10 text-left">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="bg-primary-2/10 border-primary-2/30 text-primary-2 flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-semibold">
            <RiFolder3Line size={14} /> {blog.tag}
          </span>
          <span className="flex items-center gap-1 text-xs text-neutral-400">
            <RiCalendarLine size={14} /> {formattedDate}
          </span>
          <span className="text-neutral-500">•</span>
          <span className="flex items-center gap-1 text-xs text-neutral-400">
            <RiTimeLine size={14} /> {blog.read_time} read
          </span>
        </div>

        <h1 className="text-neutral-0 mb-6 text-2xl leading-tight font-bold md:text-4xl lg:text-5xl">{blog.title}</h1>

        <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">{blog.desc}</p>

        {/* Author Metadata */}
        {blog.author && (
          <div className="border-border-1 bg-bg-3 mt-8 flex items-center gap-4 rounded-xl border p-4">
            <div className="border-border-1 relative h-12 w-12 overflow-hidden rounded-full border">
              <Image src={blog.author.avatar} alt={blog.author.name} fill className="object-cover" />
            </div>
            <div>
              <h4 className="text-neutral-0 mb-0 text-sm font-semibold">{blog.author.name}</h4>
              <p className="text-xs text-neutral-400">{blog.author.role}</p>
            </div>
          </div>
        )}
      </header>

      {/* Featured Banner Image */}
      <div className="border-border-1 bg-bg-3 relative mb-12 overflow-hidden rounded-2xl border shadow-2xl">
        <div className="relative aspect-video w-full">
          <Image src={blog.img_url} alt={blog.title} fill className="object-cover" priority />
        </div>
      </div>

      {/* Key Takeaways Box */}
      {blog.key_takeaways && blog.key_takeaways.length > 0 && (
        <div className="border-primary-2/30 bg-primary-2/5 mb-12 rounded-xl border p-6 md:p-8">
          <h3 className="text-primary-2 mb-4 flex items-center gap-2 text-lg font-bold">
            <RiCheckDoubleLine size={22} /> Key Takeaways
          </h3>
          <ul className="space-y-3">
            {blog.key_takeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-neutral-200 md:text-base">
                <span className="bg-primary-2 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black">
                  <RiCheckLine size={14} />
                </span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Article Body */}
      <div className="prose prose-invert prose-lg max-w-none space-y-6 text-neutral-300">
        {blog.content ? (
          blog.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-neutral-0 mt-8 mb-4 text-xl font-bold md:text-2xl">
                  {paragraph.replace('### ', '')}
                </h3>
              )
            }
            if (paragraph.startsWith('```')) {
              const codeContent = paragraph.replace(/```[a-z]*/g, '').trim()
              return (
                <pre
                  key={idx}
                  className="border-border-1 bg-bg-4 my-6 overflow-x-auto rounded-xl border p-4 font-mono text-sm text-neutral-200"
                >
                  <code>{codeContent}</code>
                </pre>
              )
            }
            return (
              <p key={idx} className="text-base leading-relaxed md:text-lg">
                {paragraph}
              </p>
            )
          })
        ) : (
          <p className="text-base leading-relaxed text-neutral-300">{blog.desc}</p>
        )}
      </div>

      {/* Article Footer & Share */}
      <div className="border-border-1 mt-14 flex flex-col gap-4 border-t border-b py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-400">
          <RiFileTextLine size={18} /> Category: <span className="text-primary-2">{blog.tag}</span>
        </div>

        {/* Share buttons */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-xs text-neutral-400">
            <RiShareLine size={16} /> Share article:
          </span>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=https://rifajul.dev/blogs/${blog._id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border-1 bg-bg-3 hover:border-primary-2 hover:text-primary-2 flex h-9 w-9 items-center justify-center rounded-lg border text-neutral-400 transition"
            aria-label="Share on X (Twitter)"
          >
            <RiTwitterXFill size={16} />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://rifajul.dev/blogs/${blog._id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border-1 bg-bg-3 hover:border-primary-2 hover:text-primary-2 flex h-9 w-9 items-center justify-center rounded-lg border text-neutral-400 transition"
            aria-label="Share on LinkedIn"
          >
            <RiLinkedinFill size={16} />
          </a>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedBlogs.length > 0 && (
        <section className="mt-16">
          <h2 className="text-neutral-0 mb-8 text-2xl font-bold">Related Articles</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedBlogs.map((rel) => (
              <Link
                key={rel._id}
                href={`/blogs/${rel._id}`}
                className="blog-card group border-border-1 bg-bg-3 flex flex-col overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative mb-3 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={rel.img_url}
                    alt={rel.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="bg-bg-4 border-border-1 absolute top-2 left-2 rounded border px-2 py-0.5 text-[10px] font-semibold text-neutral-300">
                    {rel.tag}
                  </span>

                  {/* Hover Icon Badge — dual animated */}
                  <div className="bg-primary-2 absolute top-1/2 left-1/2 inline-flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center align-middle leading-9 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="relative inline-block">
                      <RiArrowRightUpLine
                        size={18}
                        className="group-hover:animate-hover-icon-exit absolute text-black transition-transform duration-500 ease-in-out"
                      />
                      <RiArrowRightUpLine
                        size={18}
                        className="group-hover:animate-hover-icon-enter text-black transition-transform duration-500 ease-in-out"
                      />
                    </span>
                  </div>
                </div>
                <h4 className="text-neutral-0 group-hover:text-primary-2 line-clamp-2 text-sm font-semibold transition-colors">
                  {rel.title}
                </h4>
                <p className="mt-1 line-clamp-2 text-xs text-neutral-400">{rel.desc}</p>
                <div className="group-hover:text-primary-2 mt-3 flex items-center text-xs font-medium text-neutral-400 transition-colors duration-200">
                  Read More <RiArrowRightUpLine className="ml-0.5" size={14} />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
