import { model, Model, models, Schema } from 'mongoose'

export interface IService {
  _id: string
  title: string
  desc: string
  icon_name: string
  highlightText: string
}

const serviceSchema = new Schema<IService>(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    icon_name: { type: String, required: true },
    highlightText: { type: String },
  },
  { timestamps: true }
)

const Service: Model<IService> = models?.Service || model<IService>('Service', serviceSchema)

export default Service
