'use server'
import { connectToDatabase } from '@/lib/database/dbConnect'
import Service from '@/lib/database/models/service.model'
import { CreateServiceParams, DeleteServiceParams, ServiceParams } from '@/types'
import { handleError } from '../utils'

// Create a new service
export const createService = async ({ service }: CreateServiceParams) => {
  try {
    await connectToDatabase()

    const newService = await Service.create(service)

    return JSON.parse(JSON.stringify(newService))
  } catch (error) {
    handleError(error)
  }
}

// Get one service by Id
export const getServiceById = async (serviceId: string) => {
  try {
    await connectToDatabase()

    const service = await Service.findById(serviceId)

    if (!service) throw new Error('Service not found')

    return JSON.parse(JSON.stringify(service))
  } catch (error) {
    handleError(error)
  }
}

// Update a service by Id
export const updateService = async ({ service }: ServiceParams) => {
  try {
    await connectToDatabase()

    const serviceToUpdate = await Service.findById(service._id)
    if (!serviceToUpdate) {
      throw new Error('Unauthorized or service not found')
    }

    const updateService = await Service.findByIdAndUpdate(service._id, { ...service }, { new: true })

    return JSON.parse(JSON.stringify(updateService))
  } catch (error) {
    handleError(error)
  }
}

// Get all services
export const getAllServices = async () => {
  try {
    await connectToDatabase()

    const services = await Service.find({}).sort({ createdAt: -1 })

    return JSON.parse(JSON.stringify(services))
  } catch (error) {
    handleError(error)
  }
}

// Delete a service by Id
export const deleteService = async ({ serviceId }: DeleteServiceParams) => {
  try {
    await connectToDatabase()

    await Service.findByIdAndDelete(serviceId)
  } catch (error) {
    handleError(error)
  }
}
