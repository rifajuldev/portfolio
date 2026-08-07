import { model, Model, models, Schema } from 'mongoose'

export interface ICooperationTitle {
  _id: string
  first_title: string
  second_title: string
  third_title: string
  fourth_title: string
}

const CooperationTitleSchema = new Schema<ICooperationTitle>(
  {
    first_title: { type: String, required: true },
    second_title: { type: String, required: true },
    third_title: { type: String, required: true },
    fourth_title: { type: String, required: true },
  },
  { timestamps: true }
)

const CooperationTitle: Model<ICooperationTitle> =
  models?.CooperationTitle || model<ICooperationTitle>('CooperationTitle', CooperationTitleSchema)

export default CooperationTitle
