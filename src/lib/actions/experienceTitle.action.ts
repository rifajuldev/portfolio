'use server'
import { connectToDatabase } from '../database/dbConnect'
import ExperienceTitle, { IExperienceTitle } from '../database/models/experienceTitle.model'
import { handleError } from '../utils'

// Get experience title
export const getExperienceTitle = async () => {
  try {
    await connectToDatabase()
    const experienceTitle = await ExperienceTitle.findOne({})
    return JSON.parse(JSON.stringify(experienceTitle))
  } catch (error) {
    handleError(error)
  }
}

// Update experience title
export const updateExperienceTitle = async (data: Partial<IExperienceTitle>) => {
  try {
    await connectToDatabase()

    const existingExperienceTitle = await ExperienceTitle.findOne({})
    if (!existingExperienceTitle) {
      throw new Error('No experience title found')
    }

    await ExperienceTitle.updateOne({ _id: existingExperienceTitle._id }, { $set: data })

    return { message: 'Experience title updated successfully' }
  } catch (error) {
    handleError(error)
  }
}
