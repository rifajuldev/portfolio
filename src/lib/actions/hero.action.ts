'use server'
import { connectToDatabase } from '@/lib/database/dbConnect'
import Hero, { IHero } from '@/lib/database/models/hero.model'
import { handleError } from '@/lib/utils'

// Get hero
export const getHero = async () => {
  try {
    await connectToDatabase()
    const hero = await Hero.findOne({})
    return JSON.parse(JSON.stringify(hero))
  } catch (error) {
    handleError(error)
  }
}

// Update hero
export const updateHero = async (data: Partial<IHero>) => {
  try {
    await connectToDatabase()

    const existingHero = await Hero.findOne({})
    if (!existingHero) {
      throw new Error('No hero found to update.')
    }

    await Hero.updateOne({ _id: existingHero._id }, { $set: data })

    return { message: 'Hero updated successfully' }
  } catch (error) {
    handleError(error)
  }
}
