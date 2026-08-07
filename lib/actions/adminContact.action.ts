'use server'
import { connectToDatabase } from '../database/dbConnect'
import AdminContact, { IAdminContact } from '../database/models/adminContact.model'
import { handleError } from '../utils'

// Get contacts
export const getAdminContacts = async () => {
  try {
    await connectToDatabase()
    const contacts = await AdminContact.findOne({})
    return JSON.parse(JSON.stringify(contacts))
  } catch (error) {
    handleError(error)
  }
}

// Update contacts
export const updateAdminContacts = async (data: Partial<IAdminContact>) => {
  try {
    await connectToDatabase()

    // Find the existing contacts
    const existingContacts = await AdminContact.findOne({})
    if (!existingContacts) {
      throw new Error('No contacts found to update.')
    }

    // Update the existing contacts with the provided data
    await AdminContact.updateOne({ _id: existingContacts._id }, { $set: data })

    return { message: 'Contacts updated successfully' }
  } catch (error) {
    handleError(error)
  }
}
