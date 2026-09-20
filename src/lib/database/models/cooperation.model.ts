import { model, Model, models, Schema } from 'mongoose'

export interface ICooperation {
  _id: string
  company_name: string
  logo_url: string
  company_position: string
}

const cooperationSchema = new Schema<ICooperation>(
  {
    company_name: { type: String, required: true },
    logo_url: { type: String, required: true },
    company_position: { type: String, required: true },
  },
  { timestamps: true }
)

const Cooperation: Model<ICooperation> = models?.Cooperation || model<ICooperation>('Cooperation', cooperationSchema)

export default Cooperation
