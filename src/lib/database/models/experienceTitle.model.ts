import { model, Model, models, Schema } from 'mongoose'

export interface IExperienceTitle {
  _id: string
  first_title: string
  second_title: string
  third_title: string
  fourth_title: string
}

const experienceTitleSchema = new Schema<IExperienceTitle>(
  {
    first_title: { type: String, required: true },
    second_title: { type: String, required: true },
    third_title: { type: String, required: true },
    fourth_title: { type: String, required: true },
  },
  { timestamps: true }
)

const ExperienceTitle: Model<IExperienceTitle> =
  models?.ExperienceTitle || model<IExperienceTitle>('ExperienceTitle', experienceTitleSchema)

export default ExperienceTitle
