'use server'

import { CreateFormTechnologyParams } from '@/types'
import { connectToDatabase } from '../database/dbConnect'
import FormTechnology from '../database/models/formTechnology.model'
import { handleError } from '../utils'

// Create a new technology
export const createFormTechnology = async ({ formTechnology }: CreateFormTechnologyParams) => {
  try {
    await connectToDatabase()

    const newTechnology = await FormTechnology.create(formTechnology)

    return JSON.parse(JSON.stringify(newTechnology))
  } catch (error) {
    handleError(error)
  }
}

// Get all technologies
export const getAllFormTechnologies = async () => {
  try {
    await connectToDatabase()

    const formTechnologies = await FormTechnology.find({})

    return JSON.parse(JSON.stringify(formTechnologies))
  } catch (error) {
    handleError(error)
  }
}
