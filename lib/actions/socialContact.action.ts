'use server'
import { connectToDatabase } from '../database/dbConnect'
import SocialContacts, { ISocialContacts } from '../database/models/socialContacts.model'
import { handleError } from '../utils'

// Get Social contacts
export const getSocialContacts = async () => {
  try {
    await connectToDatabase()
    const contacts = await SocialContacts.findOne({})
    return JSON.parse(JSON.stringify(contacts))
  } catch (error) {
    handleError(error)
  }
}

// Update Social contacts
export const updateSocialContacts = async (data: Partial<ISocialContacts>) => {
  try {
    await connectToDatabase()

    // Find the existing contacts
    const existingContacts = await SocialContacts.findOne({})
    if (!existingContacts) {
      throw new Error('No contacts found to update.')
    }

    // Update the existing contacts with the provided data
    await SocialContacts.updateOne({ _id: existingContacts._id }, { $set: data })

    return { message: 'Contacts updated successfully' }
  } catch (error) {
    handleError(error)
  }
}
