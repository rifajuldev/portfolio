'use server'
import { CreateExperienceParams, DeleteExperienceParams, ExperienceParams } from '@/types'
import { connectToDatabase } from '../database/dbConnect'
import Experience from '../database/models/experience.model'
import { handleError } from '../utils'

// Create a new experience
export const createExperience = async ({ experience }: CreateExperienceParams) => {
  try {
    await connectToDatabase()

    const newExperience = await Experience.create(experience)

    return JSON.parse(JSON.stringify(newExperience))
  } catch (error) {
    handleError(error)
  }
}

// Get one experience by Id
export const getExperienceById = async (experienceId: string) => {
  try {
    await connectToDatabase()

    const experience = await Experience.findById(experienceId)

    if (!experience) throw new Error('Experience not found')

    return JSON.parse(JSON.stringify(experience))
  } catch (error) {
    handleError(error)
  }
}

// Update a experience by Id
export const updateExperience = async ({ experience }: ExperienceParams) => {
  try {
    await connectToDatabase()

    const experienceToUpdate = await Experience.findById(experience._id)
    if (!experienceToUpdate) {
      throw new Error('Unauthorized or experience not found')
    }

    const updatedExperience = await Experience.findByIdAndUpdate(experience._id, { ...experience }, { new: true })

    return JSON.parse(JSON.stringify(updatedExperience))
  } catch (error) {
    handleError(error)
  }
}

// Get all experiences
export const getAllExperiences = async () => {
  try {
    await connectToDatabase()

    const experiences = await Experience.find({}).sort({ createdAt: -1 })

    return JSON.parse(JSON.stringify(experiences))
  } catch (error) {
    handleError(error)
  }
}

// Delete a experience by Id
export const deleteExperience = async ({ experienceId }: DeleteExperienceParams) => {
  try {
    await connectToDatabase()

    await Experience.findByIdAndDelete(experienceId)
  } catch (error) {
    handleError(error)
  }
}
