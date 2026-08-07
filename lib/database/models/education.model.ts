import { model, Model, models, Schema } from 'mongoose'

export interface IEducation {
  _id: string
  start_date: Date
  end_date?: Date
  isPresent: boolean
  institute: string
  desc: string
}

const educationSchema = new Schema<IEducation>(
  {
    start_date: { type: Date, default: Date.now },
    end_date: { type: Date, default: Date.now },
    isPresent: { type: Boolean, default: false },
    institute: { type: String, required: true },
    desc: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Education: Model<IEducation> = models?.Education || model<IEducation>('Education', educationSchema)

export default Education
