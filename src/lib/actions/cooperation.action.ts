'use server'
import { CreateCooperationParams, DeleteCooperationParams } from '@/types'
import { connectToDatabase } from '../database/dbConnect'
import Cooperation from '../database/models/cooperation.model'
import { handleError } from '../utils'

// Create a new trusted company
export const createCooperation = async ({ cooperation }: CreateCooperationParams) => {
  try {
    await connectToDatabase()

    const newCooperation = await Cooperation.create(cooperation)

    return JSON.parse(JSON.stringify(newCooperation))
  } catch (error) {
    handleError(error)
  }
}

// Get all cooperations
export const getAllCooperations = async () => {
  try {
    await connectToDatabase()

    const cooperations = await Cooperation.find({}).sort({ createdAt: -1 })

    return JSON.parse(JSON.stringify(cooperations))
  } catch (error) {
    handleError(error)
  }
}

// Delete a cooperation by Id
export const deleteCooperation = async ({ cooperationId }: DeleteCooperationParams) => {
  try {
    await connectToDatabase()

    await Cooperation.findByIdAndDelete(cooperationId)
  } catch (error) {
    handleError(error)
  }
}
