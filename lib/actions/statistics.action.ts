'use server'
import { CreateStatsParams, DeleteStatParams, StatsParams } from '@/types'
import { connectToDatabase } from '../database/dbConnect'
import Statistics from '../database/models/statistics.model'
import { handleError } from '../utils'

// Crete a new stats
export const createStats = async ({ stats }: CreateStatsParams) => {
  try {
    await connectToDatabase()

    const newStats = await Statistics.create(stats)

    return JSON.parse(JSON.stringify(newStats))
  } catch (error) {
    handleError(error)
  }
}

// Get one stat by Id
export const getStatisticsById = async (statId: string) => {
  try {
    await connectToDatabase()

    const statistics = await Statistics.findById(statId)

    if (!statistics) throw new Error('Statistics not found')

    return JSON.parse(JSON.stringify(statistics))
  } catch (error) {
    handleError(error)
  }
}

// Update a stat by Id
export const updateStatistics = async ({ stats }: StatsParams) => {
  try {
    await connectToDatabase()

    const statsToUpdate = await Statistics.findById(stats._id)
    if (!statsToUpdate) {
      throw new Error('Unauthorized or stats not found')
    }

    const updateStats = await Statistics.findByIdAndUpdate(stats._id, { ...stats }, { new: true })

    return JSON.parse(JSON.stringify(updateStats))
  } catch (error) {
    handleError(error)
  }
}

// Get all Stats
export const getAllStats = async () => {
  try {
    await connectToDatabase()

    const stats = await Statistics.find({}).sort({ createdAt: -1 })

    return JSON.parse(JSON.stringify(stats))
  } catch (error) {
    handleError(error)
  }
}

// Delete a stat by Id
export const deleteStat = async ({ statId }: DeleteStatParams) => {
  try {
    await connectToDatabase()

    await Statistics.findByIdAndDelete(statId)
  } catch (error) {
    handleError(error)
  }
}
