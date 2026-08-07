'use server'
import { CreateEducationParams, DeleteEducationParams, EducationParams } from '@/types'
import { connectToDatabase } from '../database/dbConnect'
import Education from '../database/models/education.model'
import { handleError } from '../utils'

// Create a new education
export const createEducation = async ({ education }: CreateEducationParams) => {
  try {
    await connectToDatabase()

    const newEducation = await Education.create(education)

    return JSON.parse(JSON.stringify(newEducation))
  } catch (error) {
    handleError(error)
  }
}

// Get one education by Id
export const getEducationById = async (educationId: string) => {
  try {
    await connectToDatabase()

    const education = await Education.findById(educationId)

    if (!education) throw new Error('Education not found')

    return JSON.parse(JSON.stringify(education))
  } catch (error) {
    handleError(error)
  }
}

// Update education by Id
export const updateEducation = async ({ education }: EducationParams) => {
  try {
    await connectToDatabase()

    const educationToUpdate = await Education.findById(education._id)
    if (!educationToUpdate) {
      throw new Error('Unauthorized or education not found')
    }

    const updatedEducation = await Education.findByIdAndUpdate(education._id, { ...education }, { new: true })

    return JSON.parse(JSON.stringify(updatedEducation))
  } catch (error) {
    handleError(error)
  }
}

// Get all education
export const getAllEducation = async () => {
  try {
    await connectToDatabase()

    const educations = await Education.find({}).sort({ createdAt: -1 })

    return JSON.parse(JSON.stringify(educations))
  } catch (error) {
    handleError(error)
  }
}

// Delete a education by Id
export const deleteEducation = async ({ educationId }: DeleteEducationParams) => {
  try {
    await connectToDatabase()

    await Education.findByIdAndDelete(educationId)
  } catch (error) {
    handleError(error)
  }
}
