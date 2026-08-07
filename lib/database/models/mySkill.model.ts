import { model, Model, models, Schema } from 'mongoose'

export interface IMySkill {
  _id: string
  front_end_technologies: Array<string>
  back_end_technologies: Array<string>
  database_technologies: Array<string>
  tools_platform_technologies: Array<string>
  others_technologies: Array<string>
}

const mySkillSchema = new Schema<IMySkill>(
  {
    front_end_technologies: { type: [String], required: true },
    back_end_technologies: { type: [String], required: true },
    database_technologies: { type: [String], required: true },
    tools_platform_technologies: { type: [String], required: true },
    others_technologies: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
)

const MySkill: Model<IMySkill> = models?.MySkill || model<IMySkill>('MySkill', mySkillSchema)

export default MySkill
