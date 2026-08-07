'use server'
import { connectToDatabase } from '../database/dbConnect'
import MySkill, { IMySkill } from '../database/models/mySkill.model'
import { handleError } from '../utils'

// Get skills
export const getSkills = async () => {
  try {
    await connectToDatabase()
    const skills = await MySkill.findOne({})
    return JSON.parse(JSON.stringify(skills))
  } catch (error) {
    handleError(error)
  }
}

// Update skills
export const updateSkills = async (data: Partial<IMySkill>) => {
  try {
    await connectToDatabase()

    const existingSkills = await MySkill.findOne({})
    if (!existingSkills) {
      throw new Error('No skills found to update')
    }

    await MySkill.updateOne({ _id: existingSkills._id }, { $set: data })

    return { message: 'Skills updated successfully' }
  } catch (error) {
    handleError(error)
  }
}
