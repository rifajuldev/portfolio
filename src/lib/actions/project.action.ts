'use server'
import { connectToDatabase } from '@/lib/database/dbConnect'
import Project from '@/lib/database/models/project.model'
import { CreateProjectParams, DeleteProjectParams, ProjectParams } from '@/types'
import { handleError } from '../utils'

// Create a new project
export const createProject = async ({ project }: CreateProjectParams) => {
  try {
    await connectToDatabase()

    const newProject = await Project.create(project)

    return JSON.parse(JSON.stringify(newProject))
  } catch (error) {
    handleError(error)
  }
}

// Get one project by ID
export const getProjectById = async (projectId: string) => {
  try {
    await connectToDatabase()

    const project = await Project.findById(projectId)

    if (!project) throw new Error('Project not found')

    return JSON.parse(JSON.stringify(project))
  } catch (error) {
    handleError(error)
  }
}

// Update a project by ID
export const updateProject = async ({ project }: ProjectParams) => {
  try {
    await connectToDatabase()

    const projectToUpdate = await Project.findById(project._id)
    if (!projectToUpdate) {
      throw new Error('Unauthorized or project not found')
    }

    const updatedProject = await Project.findByIdAndUpdate(project._id, { ...project }, { new: true })

    return JSON.parse(JSON.stringify(updatedProject))
  } catch (error) {
    handleError(error)
  }
}

// Get all projects
export const getAllProjects = async () => {
  try {
    await connectToDatabase()

    const projects = await Project.find({}).sort({ createdAt: -1 })

    return JSON.parse(JSON.stringify(projects))
  } catch (error) {
    handleError(error)
  }
}

// Delete a project by ID
export const deleteProject = async ({ projectId }: DeleteProjectParams) => {
  try {
    await connectToDatabase()

    await Project.findByIdAndDelete(projectId)
  } catch (error) {
    handleError(error)
  }
}
