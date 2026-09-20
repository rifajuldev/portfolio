import { Model, model, models, Schema } from 'mongoose'

export interface IProject {
  _id: string
  title: string
  desc: string
  client: string
  completion_time: string
  technologies: Array<string>
  project_img_url: string
  live_link: string
  github_link: string
}

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    client: { type: String, required: true },
    completion_time: { type: String, required: true },
    technologies: { type: [String], required: true },
    project_img_url: { type: String, required: true },
    live_link: { type: String, required: true },
    github_link: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Project: Model<IProject> = models?.Project || model<IProject>('Project', projectSchema)

export default Project
