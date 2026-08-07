import { model, Model, models, Schema } from 'mongoose'

export interface IAdminContact {
  _id: string
  phone_number: string
  email: string
  whatsapp: string
  address: string
}

const adminContactSchema = new Schema<IAdminContact>(
  {
    phone_number: { type: String, required: true },
    email: { type: String, required: true },
    whatsapp: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
)

const AdminContact: Model<IAdminContact> =
  models?.AdminContact || model<IAdminContact>('AdminContact', adminContactSchema)

export default AdminContact
