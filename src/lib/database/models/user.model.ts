import bcrypt from 'bcrypt'
import { model, Model, models, Schema } from 'mongoose'

export interface IUser {
  email: string
  password: string
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return
  this.password = await bcrypt.hash(this.password, 10)
})

const User: Model<IUser> = models?.User || model<IUser>('User', userSchema)

export default User
