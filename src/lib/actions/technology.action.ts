'use server'
import { CreateTechnologyParams, DeleteTechnologyParams, TechnologyParams } from '@/types'
import { connectToDatabase } from '../database/dbConnect'
import Technology from '../database/models/technology.model'
import { handleError } from '../utils'

// Create new technology
export const createTechnology = async ({ technology }: CreateTechnologyParams) => {
  try {
    await connectToDatabase()

    const newTechnology = await Technology.create(technology)

    return JSON.parse(JSON.stringify(newTechnology))
  } catch (error) {
    handleError(error)
  }
}

// Get one technology by Id
export const getTechnologyById = async (technologyId: string) => {
  try {
    await connectToDatabase()

    const technology = await Technology.findById(technologyId)

    if (!technology) throw new Error('Technology not found')

    return JSON.parse(JSON.stringify(technology))
  } catch (error) {
    handleError(error)
  }
}

// Update technology by Id
export const updateTechnology = async ({ technology }: TechnologyParams) => {
  try {
    await connectToDatabase()

    const technologyToUpdate = await Technology.findById(technology._id)
    if (!technologyToUpdate) throw new Error('technology not found')

    const updateTechnology = await Technology.findByIdAndUpdate(technology._id, { ...technology }, { new: true })

    return JSON.parse(JSON.stringify(updateTechnology))
  } catch (error) {
    handleError(error)
  }
}

// Get all technologies
export const getAllTechnologies = async () => {
  try {
    await connectToDatabase()

    const technologies = await Technology.find({}).sort({ createdAt: -1 })

    return JSON.parse(JSON.stringify(technologies))
  } catch (error) {
    handleError(error)
  }
}

// Delete a technology by Id
export const deleteTechnology = async ({ technologyId }: DeleteTechnologyParams) => {
  try {
    await connectToDatabase()

    await Technology.findByIdAndDelete(technologyId)
  } catch (error) {
    handleError(error)
  }
}
