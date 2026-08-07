'use server'
import { connectToDatabase } from '../database/dbConnect'
import CooperationAvatar, { ICooperationAvatar } from '../database/models/cooperationAvatar.model'
import { handleError } from '../utils'

// Get the avatar
export const getCooperationAvatar = async () => {
  try {
    await connectToDatabase()

    const cooperationAvatar = await CooperationAvatar.findOne({})
    return JSON.parse(JSON.stringify(cooperationAvatar))
  } catch (error) {
    handleError(error)
  }
}

// Update the avatar
export const updateCooperationAvatar = async (data: Partial<ICooperationAvatar>) => {
  try {
    await connectToDatabase()

    const existingCooperationAvatar = await CooperationAvatar.findOne({})
    if (!existingCooperationAvatar) {
      throw new Error('No cooperation found to update')
    }

    await CooperationAvatar.updateOne({ _id: existingCooperationAvatar._id }, { $set: data })

    return { message: 'Avatar updated successfully' }
  } catch (error) {
    handleError(error)
  }
}
