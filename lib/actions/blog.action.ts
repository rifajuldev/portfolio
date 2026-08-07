'use server'
import { BlogParams, CreateBlogParams, DeleteBlogParams } from '@/types'
import { connectToDatabase } from '../database/dbConnect'
import Blog from '../database/models/blog.model'
import { handleError } from '../utils'

// Create new blog
export const createBlog = async ({ blog }: CreateBlogParams) => {
  try {
    await connectToDatabase()

    const newBlog = await Blog.create(blog)

    return JSON.parse(JSON.stringify(newBlog))
  } catch (error) {
    handleError(error)
  }
}

// Get one blog by ID
export const getBlogById = async (blogId: string) => {
  try {
    await connectToDatabase()

    const blog = await Blog.findById(blogId)

    if (!blog) throw new Error('Blog not found')

    return JSON.parse(JSON.stringify(blog))
  } catch (error) {
    handleError(error)
  }
}

// Update a blog by ID
export const updateBlog = async ({ blog }: BlogParams) => {
  try {
    await connectToDatabase()

    const blogToUpdate = await Blog.findById(blog._id)
    if (!blogToUpdate) {
      throw new Error('Unauthorized or blog not found')
    }

    const updatedBlog = await Blog.findByIdAndUpdate(blog._id, { ...blog }, { new: true })

    return JSON.parse(JSON.stringify(updatedBlog))
  } catch (error) {
    handleError(error)
  }
}

// Get all blogs
export const getAllBlogs = async () => {
  try {
    await connectToDatabase()

    const blogs = await Blog.find({}).sort({ createdAt: -1 })

    return JSON.parse(JSON.stringify(blogs))
  } catch (error) {
    handleError(error)
  }
}

// Delete a blog by ID
export const deleteBlog = async ({ blogId }: DeleteBlogParams) => {
  try {
    await connectToDatabase()

    await Blog.findByIdAndDelete(blogId)
  } catch (error) {
    handleError(error)
  }
}
