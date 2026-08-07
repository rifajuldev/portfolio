import { Model, model, models, Schema } from 'mongoose'

export interface IFormTechnology {
  _id: string
  name: string
}

const formTechnologySchema = new Schema<IFormTechnology>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const FormTechnology: Model<IFormTechnology> =
  models?.FormTechnology || model<IFormTechnology>('FormTechnology', formTechnologySchema)

export default FormTechnology
