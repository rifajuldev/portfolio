'use client'
import BlogForm from '@/components/forms/BlogForm'
import DashboardPageLayout from '@/components/shared/DashboardPageLayout'
import DeleteConfirmation from '@/components/shared/DeleteConfirmation'
import { deleteBlog } from '@/lib/actions/blog.action'
import { useAppContext } from '@/lib/context/appContext'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { FaRegEdit } from 'react-icons/fa'

const AdminDashboardBlog = () => {
  const { blogs, fetchBlogs } = useAppContext()
  const router = useRouter()

  const handleDelete = async (id: string) => {
    await deleteBlog({ blogId: id })

    await fetchBlogs()
    toast.success('Blog Deleted successfully')
    router.push('/#blog')
  }

  return (
    <DashboardPageLayout title="Blogs">
      <div className="mb-12">
        <h1 className="form-heading">Create New Blog</h1>
        <BlogForm type="Create" />
      </div>

      <div>
        <h1 className="form-heading">All Blogs</h1>

        <div className="form-container">
          {blogs.map(({ _id, tag, img_url, date, read_time, title, desc, link }) => (
            <div key={_id} className="flex flex-col justify-stretch">
              <div className="border-border-1 bg-bg-3 flex-grow rounded-lg border p-4">
                {/* Top Side */}
                <div className="relative mb-4">
                  <div className="absolute top-2 right-2 flex flex-col gap-4 rounded-sm shadow-sm transition-all">
                    <Link href={`/adminProfile/blogs/${_id}`} className="text-neutral-0 hover:text-primary-2">
                      <FaRegEdit size={22} />
                    </Link>

                    <DeleteConfirmation
                      onConfirm={() => handleDelete(_id)}
                      title="Are you sure you want to delete this blog?"
                    />
                  </div>

                  <Image className="w-full rounded-md" src={img_url} alt="project" width={500} height={300} />
                </div>

                {/* Bottom Side */}
                <div>
                  <h5 className="text-primary-1">{title}</h5>
                  <p>{desc}</p>

                  <div className="mt-4">
                    <p className="text-secondary-2 border-border-1 mb-4 border-b pb-4">Blog Info</p>

                    <ul>
                      <li className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-end">Tag:</p>
                          <p className="mb-0 text-end text-neutral-300">{tag}</p>
                        </div>
                      </li>

                      <li className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-end">Date:</p>
                          <p className="mb-0 text-end text-neutral-300">
                            {new Intl.DateTimeFormat('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            }).format(new Date(date))}
                          </p>
                        </div>
                      </li>

                      <li className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-end">Read Time:</p>
                          <p className="mb-0 text-end text-neutral-300">{read_time}</p>
                        </div>
                      </li>

                      <li className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                        <div className="flex flex-wrap justify-between">
                          <p className="mb-0 text-end">Link:</p>
                          <p className="mb-0 flex flex-wrap text-end break-all text-neutral-300">{link}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardPageLayout>
  )
}

export default AdminDashboardBlog
