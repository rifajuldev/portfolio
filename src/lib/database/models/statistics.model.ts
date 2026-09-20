import { model, Model, models, Schema } from 'mongoose'

export interface IStatistics {
  _id: string
  stats_title: string
  icon_name: string
  count: number
}

const statisticsSchema = new Schema<IStatistics>(
  {
    stats_title: { type: String, required: true },
    icon_name: { type: String, required: true },
    count: { type: Number, required: true },
  },
  { timestamps: true }
)

const Statistics: Model<IStatistics> = models?.Statistics || model<IStatistics>('Statistics', statisticsSchema)

export default Statistics
