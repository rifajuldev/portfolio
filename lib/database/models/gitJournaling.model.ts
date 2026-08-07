import { model, Model, models, Schema } from 'mongoose'

export interface IGit {
  _id: string
  date: Date
  title: string
}

const gitJournalingSchema = new Schema<IGit>(
  {
    date: { type: Date, default: Date.now },
    title: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Git: Model<IGit> = models?.Git || model<IGit>('Git', gitJournalingSchema)

export default Git
