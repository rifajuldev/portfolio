import { model, Model, models, Schema } from 'mongoose'

export interface ITechnology {
  _id: string
  tech_name: string
  tech_img_url: string
  tech_official_url: string
  show_in_hero: boolean
  skill_position: string
}

const technologySchema = new Schema<ITechnology>(
  {
    tech_name: { type: String, required: true },
    tech_img_url: { type: String, required: true },
    tech_official_url: { type: String, required: true },
    show_in_hero: { type: Boolean, required: true },
    skill_position: { type: String, required: true },
  },
  { timestamps: true }
)

const Technology: Model<ITechnology> = models?.Technology || model<ITechnology>('Technology', technologySchema)

export default Technology
