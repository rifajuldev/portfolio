import { model, Model, models, Schema } from 'mongoose'

export interface IExperience {
  _id: string
  job_desc_list: Array<{ text: string; highlight?: string }>
  experi_technologies: Array<string>
  company_name: string
  company_logo_url: string
  role: string
  job_start_date: Date
  job_end_date?: Date
  isPresent: boolean
}

const experienceSchema = new Schema<IExperience>(
  {
    job_desc_list: { type: [{ text: String, highlight: String }], required: true },
    experi_technologies: { type: [String], required: true },
    company_name: { type: String, required: true },
    company_logo_url: { type: String, required: true },
    role: { type: String, required: true },
    job_start_date: { type: Date, required: true },
    job_end_date: { type: Date },
    isPresent: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Experience: Model<IExperience> = models?.Experience || model<IExperience>('Experience', experienceSchema)

export default Experience
