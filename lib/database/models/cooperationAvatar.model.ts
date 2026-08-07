import { model, Model, models, Schema } from 'mongoose'

export interface ICooperationAvatar {
  _id: string
  avatar_url: string
}

const cooperationAvatarSchema = new Schema<ICooperationAvatar>(
  { avatar_url: { type: String, required: true } },
  { timestamps: true }
)

const CooperationAvatar: Model<ICooperationAvatar> =
  models?.CooperationAvatar || model<ICooperationAvatar>('CooperationAvatar', cooperationAvatarSchema)

export default CooperationAvatar
