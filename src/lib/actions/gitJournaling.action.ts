'use server'
import { CreateGitParams, DeleteGitParams, GitParams } from '@/types'
import { connectToDatabase } from '../database/dbConnect'
import Git from '../database/models/gitJournaling.model'
import { handleError } from '../utils'

// Create new Git
export const createGit = async ({ git }: CreateGitParams) => {
  try {
    await connectToDatabase()

    const newGit = await Git.create(git)

    return JSON.parse(JSON.stringify(newGit))
  } catch (error) {
    handleError(error)
  }
}

// Get one git by Id
export const getGitById = async (gitId: string) => {
  try {
    await connectToDatabase()

    const git = await Git.findById(gitId)

    if (!git) throw new Error('Git not found')

    return JSON.parse(JSON.stringify(git))
  } catch (error) {
    handleError(error)
  }
}

// Update a git by Id
export const updateGit = async ({ git }: GitParams) => {
  try {
    await connectToDatabase()

    const gitToUpdate = await Git.findById(git._id)
    if (!gitToUpdate) {
      throw new Error('Unauthorized or git not found')
    }

    const updatedGit = await Git.findByIdAndUpdate(git._id, { ...git }, { new: true })

    return JSON.parse(JSON.stringify(updatedGit))
  } catch (error) {
    handleError(error)
  }
}

// Get all gits
export const getAllGits = async () => {
  try {
    await connectToDatabase()

    const gits = await Git.find({}).sort({ createdAt: -1 }).limit(5)

    return JSON.parse(JSON.stringify(gits))
  } catch (error) {
    handleError(error)
  }
}

// Delete a git by Id
export const deleteGit = async ({ gitId }: DeleteGitParams) => {
  try {
    await connectToDatabase()

    await Git.findByIdAndDelete(gitId)
  } catch (error) {
    handleError(error)
  }
}
