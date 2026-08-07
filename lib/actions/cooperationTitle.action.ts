'use server'
import { connectToDatabase } from '../database/dbConnect'
import CooperationTitle, { ICooperationTitle } from '../database/models/cooperationTitle.model'
import { handleError } from '../utils'

// Get cooperation title
export const getCooperationTitle = async () => {
  try {
    await connectToDatabase()
    const cooperationTitle = await CooperationTitle.findOne({})
    return JSON.parse(JSON.stringify(cooperationTitle))
  } catch (error) {
    handleError(error)
  }
}

// Update cooperation title
export const updateCooperationTitle = async (data: Partial<ICooperationTitle>) => {
  try {
    await connectToDatabase()

    const existingCooperationTitle = await CooperationTitle.findOne({})
    if (!existingCooperationTitle) {
      throw new Error('No cooperation title found')
    }

    await CooperationTitle.updateOne({ _id: existingCooperationTitle._id }, { $set: data })

    return { message: 'Cooperation title updated successfully' }
  } catch (error) {
    handleError(error)
  }
}
